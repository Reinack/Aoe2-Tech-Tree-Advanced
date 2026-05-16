// ═══════════════════════════════════════════════════════════
// LAYOUT
// ═══════════════════════════════════════════════════════════

const NW = 68, NH = 68, NPADX = 14, NPADY = 10;
const SLOT_H = 72;          // Height of a sub-row (node + padding)
const LEFT_LABEL_W = 175;
const TOP_PAD = 10;         // Espacio superior antes de la primera edad
const AGE_TOP_H = 18;       // Space at top of age bands
const BLD_GAP = 22;         // Separación entre grupos de edificios

function computeLayout(currentNodes, currentBuildings) {
  const maxRow = {};
  currentBuildings.forEach(b => { maxRow[b.id] = -1; });
  currentNodes.forEach(n => {
    const key = n.type === 'defencive' ? 'defencive' : n.building;
    maxRow[key] = Math.max(maxRow[key] ?? -1, n.col);
  });

  // ── X allocation ─────────────────────────────────────────
  // Each building gets 1 extra column at the left for its icon,
  // then its tech nodes fill the remaining columns.
  const bldX = {};
  const colGroupX = {};
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
      const nodeCols = Math.max((maxRow[key] ?? 0) + 1, 0);
      x += (1 + nodeCols) * (NW + NPADX) + BLD_GAP;
    }
  });

  // Place defensive group (towers/walls by col) AFTER university
  if (maxRow['defencive'] !== undefined) {
    const uniX = bldX['university'] ?? x;
    const uniCols = (maxRow['university'] ?? 0) + 1;
    colGroupX['defencive'] = uniX + (1 + uniCols) * (NW + NPADX) + BLD_GAP;
    const defEnd = colGroupX['defencive'] + ((maxRow['defencive'] ?? 0) + 1) * (NW + NPADX) + BLD_GAP;
    x = Math.max(x, defEnd);
  }

  // ── Age band heights ──────────────────────────────────────
  // No dedicated building row — buildings share the node grid.
  const ageYStart = [TOP_PAD, 0, 0, 0];
  const ageHArray = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    ageHArray[i] = AGE_TOP_H + 2 * SLOT_H + 10;
    if (i > 0) ageYStart[i] = ageYStart[i - 1] + ageHArray[i - 1];
  }

  // ── Node positions ────────────────────────────────────────
  // Nodes shift right by 1 column to leave room for the building icon.
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
    const baseX = isDef ? (colGroupX['defencive'] ?? x) : (bldX[n.building] + (NW + NPADX));
    pos[n.id] = {
      x: baseX + colIndex * (NW + NPADX),
      y: ageYStart[ageIndex] + AGE_TOP_H + subRow * SLOT_H + 10,
    };
  });

  // ── Building positions ────────────────────────────────────
  // Buildings sit at the leftmost column of their group, same Y grid as nodes.
  const bldPos = {};

  currentBuildings.forEach(b => {
    const ageIdx = Math.floor((b.row ?? b.age * 2) / 2);
    const subRow = (b.row ?? b.age * 2) % 2;
    bldPos[b.id] = {
      x: bldX[b.id],
      y: ageYStart[ageIdx] + AGE_TOP_H + subRow * SLOT_H + 10,
    };
  });

  return {
    bldX, bldPos, maxRow, pos, ageYStart, ageHArray,
    totalW: x, totalH: ageYStart[3] + ageHArray[3] + 20,
  };
}
