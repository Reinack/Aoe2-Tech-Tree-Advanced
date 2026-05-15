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
  currentNodes.forEach(n => {
    const key = n.type === 'defencive' ? 'defencive' : n.building;
    maxRow[key] = Math.max(maxRow[key] ?? -1, n.col);
  });

  // ── Col-group: allocate one horizontal slot per layout_col group ────────────
  // layout_col buildings (towers, walls) share a column; their vertical
  // position is now controlled by b.row (0-7) like all other buildings.

  // Max building sub-rows per age band (derived from b.row % 2)
  const ageMaxBldRows = [1, 1, 1, 1];
  currentBuildings.forEach(b => {
    if (b.row === undefined) return;
    const ageIdx = Math.floor(b.row / 2);
    const subRow = b.row % 2;
    if (subRow + 1 > ageMaxBldRows[ageIdx]) ageMaxBldRows[ageIdx] = subRow + 1;
  });

  // ── X allocation ─────────────────────────────────────────
  const bldX = {};
  const colGroupX = { defencive: LEFT_LABEL_W + 20 };
  let x = LEFT_LABEL_W;
  const allocatedColGroups = new Set();

  currentBuildings.forEach(b => {
    if (b.layout_col) {
      if (!allocatedColGroups.has(b.layout_col)) {
        allocatedColGroups.add(b.layout_col);
        colGroupX[b.layout_col] = x;
        x += (NW + NPADX) + BLD_GAP;
      }
      bldX[b.id] = colGroupX[b.layout_col];
    } else {
      bldX[b.id] = x;
      const key = b.id;
      const cols = Math.max((maxRow[key] ?? 0) + 1, 1);
      x += cols * (NW + NPADX) + BLD_GAP;
    }
  });

  // Defensive col groups (towers col=0, walls col=1) handled via maxRow['defencive']
  if (maxRow['defencive'] !== undefined) {
    const defCols = (maxRow['defencive'] ?? 0) + 1;
    // allocate space for defensive group if needed
  }

  // (depth calculation removed — vertical position comes from n.row directly)

  // ── Which ages actually have buildings ───────────────────
  const ageHasBuildings = [false, false, false, false];
  currentBuildings.forEach(b => { ageHasBuildings[b.age] = true; });

  // ── Age band heights ──────────────────────────────────────
  // Each age has exactly 2 sub-rows (row % 2 == 0 or 1).
  const ageYStart = [TOP_PAD, 0, 0, 0];
  const ageHArray = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    const topH = ageHasBuildings[i] ? ageMaxBldRows[i] * BLD_ROW_H : AGE_TOP_H;
    ageHArray[i] = topH + 2 * SLOT_H + 10;
    if (i > 0) ageYStart[i] = ageYStart[i - 1] + ageHArray[i - 1];
  }

  // ── Node positions ────────────────────────────────────────
  const pos = {};
  currentNodes.forEach(n => {
    let colIndex = n.col;
    const isDef = n.type === 'defencive';
    const bKey = isDef ? 'defencive' : n.building;
    if (n.prereqs && n.prereqs.length > 0) {
      const pId = n.prereqs[0];
      const pNode = currentNodes.find(x => x.id === pId);
      if (pNode && ((isDef && pNode.type==='defencive') || pNode.building === n.building) && Math.floor(pNode.row / 2) === Math.floor(n.row / 2)) {
        colIndex = pNode.col;
      }
    }
    const ageIndex = Math.floor(n.row / 2);
    const subRow = n.row % 2;
    const topH = ageHasBuildings[ageIndex] ? ageMaxBldRows[ageIndex] * BLD_ROW_H : AGE_TOP_H;
    const baseX = isDef ? (colGroupX['defencive'] ?? LEFT_LABEL_W) : bldX[n.building];
    pos[n.id] = {
      x: baseX + colIndex * (NW + NPADX),
      y: ageYStart[ageIndex] + topH + subRow * SLOT_H + 10,
    };
  });

  // ── Building positions ────────────────────────────────────
  const bldPos = {};

  currentBuildings.forEach(b => {
    const ageIdx = Math.floor((b.row ?? b.age * 2) / 2);
    const subRow = (b.row ?? b.age * 2) % 2;
    if (b.layout_col) {
      bldPos[b.id] = {
        x: bldX[b.id],
        y: ageYStart[ageIdx] + 8 + subRow * BLD_ROW_H,
      };
    } else {
      // Center building over the horizontal span of its nodes
      const bldNodes = currentNodes.filter(n => n.building === b.id);
      let minRow = Infinity, maxRowVal = -Infinity;
      bldNodes.forEach(n => {
        let colIndex = n.col;
        if (n.prereqs && n.prereqs.length > 0) {
          const pId = n.prereqs[0];
          const pNode = currentNodes.find(x => x.id === pId);
          if (pNode && pNode.building === n.building && Math.floor(pNode.row / 2) === Math.floor(n.row / 2)) {
            colIndex = pNode.col;
          }
        }
        if (colIndex < minRow) minRow = colIndex;
        if (colIndex > maxRowVal) maxRowVal = colIndex;
      });
      if (minRow === Infinity) { minRow = 0; maxRowVal = 0; }
      const centerCol = (minRow + maxRowVal) / 2;
      bldPos[b.id] = {
        x: bldX[b.id] + centerCol * (NW + NPADX),
        y: ageYStart[ageIdx] + 8 + subRow * BLD_ROW_H,
      };
    }
  });

  return {
    bldX, bldPos, maxRow, pos, ageYStart, ageHArray,
    totalW: x, totalH: ageYStart[3] + ageHArray[3] + 20,
  };
}
