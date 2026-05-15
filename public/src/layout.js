// ═══════════════════════════════════════════════════════════
// LAYOUT
// ═══════════════════════════════════════════════════════════

const NW = 68, NH = 68, NPADX = 14, NPADY = 10;
const SLOT_H = 72;          // Height of a sub-row (node + padding)
const LEFT_LABEL_W = 175;
const TOP_PAD = 10;         // Espacio superior antes de la primera edad
const BLD_ROW_H = NH + NPADY + 16;  // Altura reservada por fila de edificios
const AGE_TOP_H = 18;       // Space at top of age bands that have no buildings
const BLD_GAP = 22;         // Separación entre grupos de edificios

function computeLayout(currentNodes, currentBuildings) {
  const maxRow = {};
  currentBuildings.forEach(b => { maxRow[b.id] = -1; });
  currentNodes.forEach(n => { maxRow[n.building] = Math.max(maxRow[n.building] ?? -1, n.row); });

  // ── Col-group analysis ────────────────────────────────────
  // Buildings with the same layout_col share one horizontal slot and stack
  // vertically within each age band (outpost/watchtower/etc. in "towers",
  // palisadewall/stonewall/etc. in "walls").
  const colGroupAgeCount = {}; // `${layout_col}_${age}` → count of buildings
  currentBuildings.forEach(b => {
    if (!b.layout_col) return;
    const key = `${b.layout_col}_${b.age}`;
    colGroupAgeCount[key] = (colGroupAgeCount[key] || 0) + 1;
  });

  // Maximum stacked buildings per age (may be >1 when e.g. palisadewall+palisadegate share age 0)
  const ageMaxBldRows = [1, 1, 1, 1];
  Object.entries(colGroupAgeCount).forEach(([key, cnt]) => {
    const age = parseInt(key.split('_').pop());
    if (!isNaN(age) && age >= 0 && age <= 3) {
      ageMaxBldRows[age] = Math.max(ageMaxBldRows[age], cnt);
    }
  });

  // ── X allocation ─────────────────────────────────────────
  const bldX = {};
  const colGroupX = {};
  let x = LEFT_LABEL_W;
  const allocatedColGroups = new Set();

  currentBuildings.forEach(b => {
    if (b.layout_col) {
      if (!allocatedColGroups.has(b.layout_col)) {
        allocatedColGroups.add(b.layout_col);
        colGroupX[b.layout_col] = x;
        x += (NW + NPADX) + BLD_GAP;   // one column wide for the whole group
      }
      bldX[b.id] = colGroupX[b.layout_col];
    } else {
      bldX[b.id] = x;
      const cols = Math.max((maxRow[b.id] ?? 0) + 1, 1);
      x += cols * (NW + NPADX) + BLD_GAP;
    }
  });

  // ── Node depth within each age band ──────────────────────
  const depth = {};
  currentNodes.forEach(n => { depth[n.id] = 0; });
  let changed = true;
  while (changed) {
    changed = false;
    currentNodes.forEach(n => {
      if (n.prereqs && n.prereqs.length > 0) {
        const pId = n.prereqs[0];
        const pNode = currentNodes.find(x => x.id === pId);
        if (pNode && pNode.age === n.age) {
          if (depth[n.id] <= depth[pId]) {
            depth[n.id] = depth[pId] + 1;
            changed = true;
          }
        }
      }
    });
  }

  const ageMaxDepth = [0, 0, 0, 0];
  currentNodes.forEach(n => {
    ageMaxDepth[n.age] = Math.max(ageMaxDepth[n.age], depth[n.id]);
  });

  // ── Which ages actually have buildings ───────────────────
  const ageHasBuildings = [false, false, false, false];
  currentBuildings.forEach(b => { ageHasBuildings[b.age] = true; });

  // ── Age band heights ──────────────────────────────────────
  // Ages with buildings: full BLD_ROW_H. Ages without: just AGE_TOP_H for label space.
  const ageYStart = [TOP_PAD, 0, 0, 0];
  const ageHArray = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    const topH = ageHasBuildings[i] ? ageMaxBldRows[i] * BLD_ROW_H : AGE_TOP_H;
    ageHArray[i] = topH + (Math.max(ageMaxDepth[i], 1) + 1) * SLOT_H + 10;
    if (i > 0) ageYStart[i] = ageYStart[i - 1] + ageHArray[i - 1];
  }

  // ── Node positions ────────────────────────────────────────
  const pos = {};
  currentNodes.forEach(n => {
    let colIndex = n.row;
    if (n.prereqs && n.prereqs.length > 0) {
      const pId = n.prereqs[0];
      const pNode = currentNodes.find(x => x.id === pId);
      if (pNode && pNode.age === n.age && pNode.building === n.building) {
        colIndex = pNode.row;
      }
    }
    const topH = ageHasBuildings[n.age] ? ageMaxBldRows[n.age] * BLD_ROW_H : AGE_TOP_H;
    pos[n.id] = {
      x: bldX[n.building] + colIndex * (NW + NPADX),
      y: ageYStart[n.age] + topH + depth[n.id] * SLOT_H + 10,
    };
  });

  // ── Building positions ────────────────────────────────────
  const bldPos = {};
  const colGroupAgeIdx = {};  // tracks vertical stack index within col_group + age

  currentBuildings.forEach(b => {
    if (b.layout_col) {
      const key = `${b.layout_col}_${b.age}`;
      const idx = colGroupAgeIdx[key] || 0;
      colGroupAgeIdx[key] = idx + 1;
      bldPos[b.id] = {
        x: bldX[b.id],
        y: ageYStart[b.age] + 8 + idx * BLD_ROW_H,
      };
    } else {
      // Center building over the horizontal span of its nodes
      const bldNodes = currentNodes.filter(n => n.building === b.id);
      let minRow = Infinity, maxRowVal = -Infinity;
      bldNodes.forEach(n => {
        let colIndex = n.row;
        if (n.prereqs && n.prereqs.length > 0) {
          const pId = n.prereqs[0];
          const pNode = currentNodes.find(x => x.id === pId);
          if (pNode && pNode.age === n.age && pNode.building === n.building) {
            colIndex = pNode.row;
          }
        }
        if (colIndex < minRow) minRow = colIndex;
        if (colIndex > maxRowVal) maxRowVal = colIndex;
      });
      if (minRow === Infinity) { minRow = 0; maxRowVal = 0; }
      const centerCol = (minRow + maxRowVal) / 2;
      bldPos[b.id] = {
        x: bldX[b.id] + centerCol * (NW + NPADX),
        y: ageYStart[b.age] + 8,
      };
    }
  });

  return {
    bldX, bldPos, maxRow, pos, ageYStart, ageHArray,
    totalW: x, totalH: ageYStart[3] + ageHArray[3] + 20,
  };
}
