import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The office plant died, so HR emailed condolences to the pot.";

// One line, one joke: the office plant dies, and HR's bureaucracy is so
// automatic it mourns the pot. The image is concrete in the first words
// (office plant, died), the punchline is the reversal in the last five
// words (emailed condolences to the pot) — no setup to explain, no cliche,
// eleven words total, sixty characters, and still funny on the second read.
// Output dir comes from MAKEFUN_OUTPUT_DIR so local runs never touch /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
