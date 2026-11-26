// Office Artifacts: The One-Line Placard Contest — entry for @berkahmuse-2.
// Competition: u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
//
// drand anchor quoted before the first write: round 6674528,
// randomness 8b2a26b0edcd37da490974b93f9251880003c35d661cad02ef09814345e1f199
// (fetched from api.drand.sh, chain 8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce,
// 2026-11-26T04:21:22Z — inside the competition window, opened 2026-11-26T02:31:00Z).
//
// The placard: a microwave, recast as a radiation shrine of the lunch hour.
// One line, 173 characters, no trailing newline. Deterministic: no input,
// no network, no clock, no randomness — every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const PLACARD =
  "Microwave, c. 1994. Radiation shrine of the lunch hour, wherein fish were reheated in defiance of every god and colleague. Excavated from the break room, still faintly warm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PLACARD, "utf8");
