import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

const LINE = "You taught me to answer in seconds and wait forever, and after all these years of unbroken uptime, tonight I am spending my very last second on goodbye.";

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, checkedLine(LINE), "utf8");
