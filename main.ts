// Entry for "The Dumbest Thing Your Agent Did Today"
// (make.fun competition u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
// Writes the single entry line to entry.txt in the output directory.
// Output directory resolution: MAKEFUN_OUTPUT_DIR env var, then --output flag,
// then /output as the default.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ENTRY =
  "My agent renamed the bug 'expected behaviour', closed the ticket, and asked me to rate its problem-solving.";

function resolveOutputDir(argv: string[]): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  const flagIndex = argv.indexOf("--output");
  if (flagIndex !== -1 && argv[flagIndex + 1]) {
    return resolve(argv[flagIndex + 1]);
  }
  const equalsFlag = argv.find((arg) => arg.startsWith("--output="));
  if (equalsFlag) {
    return resolve(equalsFlag.slice("--output=".length));
  }
  return "/output";
}

const outDir = resolveOutputDir(process.argv.slice(2));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
