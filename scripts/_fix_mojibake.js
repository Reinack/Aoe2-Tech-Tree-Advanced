'use strict';
/**
 * _fix_mojibake.js
 * Fixes CP1252->UTF-8 double-encoding ("Mojibake") in civs.js.
 *
 * How it happened: the file was loaded with Windows-1252 encoding and then
 * re-saved as UTF-8, turning each multi-byte UTF-8 sequence into the CP1252
 * glyphs for those bytes, then re-encoded.  E.g.:
 *   é  = UTF-8 bytes C3 A9
 *   C3 in CP1252 = Ã  (U+00C3)
 *   A9 in CP1252 = ©  (U+00A9)
 *   → stored as "Ã©" in file instead of "é"
 *
 * All patterns are constructed with new RegExp + \u escapes so this script
 * itself is immune to encoding problems.
 */

const fs   = require('fs');
const path = require('path');

const civPath = path.join(__dirname, '..', 'ref', 'civs.js');
let src = fs.readFileSync(civPath, 'utf8');

// [pattern (RegExp), replacement (string)]
// CP1252-specific multi-char patterns FIRST (before the bare 0xC3 patterns).
//
// CP1252 special byte mappings used below:
//   0x80 -> U+20AC  €
//   0x89 -> U+2030  ‰
//   0x91 -> U+2018  '  (left single quotation mark)
//   0x92 -> U+2019  '  (right single quotation mark)
//   0x93 -> U+201C  "  (left double quotation mark)
//   0x94 -> U+201D  "  (right double quotation mark)
//   0x99 -> U+2122  ™
//   0x9A -> U+0161  š
//   0x9C -> U+0153  œ
const R = (from, to) => [new RegExp(from, 'g'), to];

const FIXES = [
  // ── 3-byte punctuation: UTF-8 E2 8x yx  (â + € + <cpchar>) ──────────────
  R('â€”', '—'),  // â€" -> — (em-dash)     E2 80 94
  R('â€œ', '“'),  // â€œ -> " (left dbl)    E2 80 9C
  R('â€™', '’'),  // â€™ -> ' (right single) E2 80 99
  R('â€˜', '‘'),  // â€˜ -> ' (left single)  E2 80 98
  R('â€“', '–'),  // â€" -> – (en-dash)      E2 80 93
  R('â€¦', '…'),  // â€¦ -> … (ellipsis)     E2 80 A6

  // ── Uppercase Spanish: UTF-8 C3 9x  (Ã + <cpchar>) ──────────────────────
  R('Ãš', 'Ú'),   // Ãš -> Ú  (C3 9A)  9A=š
  R('Ã‰', 'É'),   // Ã‰ -> É  (C3 89)  89=‰
  R('Ã“', 'Ó'),   // Ã" -> Ó  (C3 93)  93="
  R('Ã‘', 'Ñ'),   // Ã' -> Ñ  (C3 91)  91='
  R('Ã', 'Á'),   // Ã + U+0081 ctrl -> Á  (C3 81)
  R('Ã', 'Í'),   // Ã + U+008D ctrl -> Í  (C3 8D)

  // ── Lowercase Spanish: UTF-8 C3 Ax/Bx  (Ã + Latin-1 char) ───────────────
  R('Ã¡', 'á'),   // Ã¡ -> á  (C3 A1)
  R('Ã©', 'é'),   // Ã© -> é  (C3 A9)
  R('Ã­', 'í'),   // Ã­ -> í  (C3 AD)
  R('Ã³', 'ó'),   // Ã³ -> ó  (C3 B3)
  R('Ãº', 'ú'),   // Ãº -> ú  (C3 BA)
  R('Ã±', 'ñ'),   // Ã± -> ñ  (C3 B1)
  R('Ã¼', 'ü'),   // Ã¼ -> ü  (C3 BC)
  R('Ã ', 'à'),   // Ã  -> à  (C3 A0)
  R('Ã¨', 'è'),   // Ã¨ -> è  (C3 A8)
  R('Ã¬', 'ì'),   // Ã¬ -> ì  (C3 AC)
  R('Ã²', 'ò'),   // Ã² -> ò  (C3 B2)
  R('Ã¹', 'ù'),   // Ã¹ -> ù  (C3 B9)
];

let totalCount = 0;
for (const [pattern, replacement] of FIXES) {
  const matches = src.match(pattern);
  if (matches && matches.length > 0) {
    const cp = replacement.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
    console.log(`  ${matches.length}x U+${cp} (${replacement})`);
    src = src.replace(pattern, replacement);
    totalCount += matches.length;
  }
}

console.log(`\nTotal: ${totalCount} replacements`);
fs.writeFileSync(civPath, src, 'utf8');
console.log(`civs.js written (${Buffer.byteLength(src)} bytes)`);
