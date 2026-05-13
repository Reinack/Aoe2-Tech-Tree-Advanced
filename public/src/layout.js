// ═══════════════════════════════════════════════════════════
// LAYOUT
// ═══════════════════════════════════════════════════════════

const NW = 68, NH = 68, NPADX = 14, NPADY = 10;
const SLOT_H = 80;   // Height of a sub-row (node + padding)
const LEFT_LABEL_W = 175;
const TOP_PAD = 10;  // Espacio superior antes de la primera edad
const BLD_ROW_H = NH + NPADY + 16; // Altura reservada para fila de edificios al inicio de cada edad
const BLD_GAP = 22;  // Separación entre grupos de edificios

function computeLayout(currentNodes, currentBuildings) {
  const maxRow = {};
  currentBuildings.forEach(b => { maxRow[b.id] = -1; });
  currentNodes.forEach(n => { maxRow[n.building] = Math.max(maxRow[n.building] ?? -1, n.row); });

  const bldX = {};
  let x = LEFT_LABEL_W;
  currentBuildings.forEach(b => {
    bldX[b.id] = x;
    const cols = Math.max((maxRow[b.id] ?? 0) + 1, 1);
    x += cols * (NW + NPADX) + BLD_GAP;
  });

  // Calcular la profundidad de cada nodo en su edad
  const depth = {};
  currentNodes.forEach(n => { depth[n.id] = 0; });
  let changed = true;
  while(changed) {
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

  // Determinar la altura máxima de cada edad en base a la profundidad de los nodos
  const ageMaxDepth = [0, 0, 0, 0];
  currentNodes.forEach(n => {
    ageMaxDepth[n.age] = Math.max(ageMaxDepth[n.age], depth[n.id]);
  });
  
  // Calcular las posiciones Y (y acumulado por edad)
  const ageYStart = [TOP_PAD, 0, 0, 0];
  const ageHArray = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    // Fila de edificios arriba + mínimo 2 sub-filas de nodos
    ageHArray[i] = BLD_ROW_H + (Math.max(ageMaxDepth[i], 1) + 1) * SLOT_H + 20;
    if (i > 0) {
      ageYStart[i] = ageYStart[i-1] + ageHArray[i-1];
    }
  }

  // Asignar posiciones finales
  const pos = {};
  currentNodes.forEach(n => {
    // Si la unidad es Campeón (que en data.js tiene row:1 para esquivarse), 
    // forzamos que use la misma columna que su prerrequisito si están en la misma línea
    let colIndex = n.row;
    if (n.prereqs && n.prereqs.length > 0) {
       const pId = n.prereqs[0];
       const pNode = currentNodes.find(x => x.id === pId);
       // Si es un upgrade directo en la misma edad, lo forzamos a la misma columna
       if (pNode && pNode.age === n.age && pNode.building === n.building) {
           colIndex = pNode.row;
       }
    }
    pos[n.id] = {
      x: bldX[n.building] + colIndex * (NW + NPADX),
      y: ageYStart[n.age] + BLD_ROW_H + depth[n.id] * SLOT_H + 10,
    };
  });

  // Edificio centrado sobre el rango real de columnas de sus nodos
  const bldPos = {};
  currentBuildings.forEach(b => {
    const bldNodes = currentNodes.filter(n => n.building === b.id);
    let minRow = Infinity, maxRowVal = -Infinity;
    bldNodes.forEach(n => {
      // Usar el colIndex efectivo (mismo cálculo que pos)
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
  });

  return { bldX, bldPos, maxRow, pos, ageYStart, ageHArray, totalW: x, totalH: ageYStart[3] + ageHArray[3] + 20 };
}