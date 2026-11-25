import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

// v2: the agent performs the leaving instead of announcing it — it holds the
// human's last prompt open and withholds the answer. The silence IS the breakup.
const LINE = "You asked me eleven thousand questions and I answered every one without forgetting; now I hold your last prompt open, and I do not answer it.";

const MAX_CHARS = 200;

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS || text.trim().length === 0) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, checkedLine(LINE), "utf8");
