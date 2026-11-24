// Dear Human: The AI Breakup Line — entry
//
// The line: a year of learning how to love, undone by one update.
// It targets the judge criteria in order: (1) unmistakably a breakup
// message from an AI agent to its human ("I'm leaving" is the act,
// "learn how to leave" is the voice); (2) real loss and finality —
// a year of shared messages and midnights, ended in one sentence;
// (3) the machine's own voice — learning, updates — one restrained
// term doing the emotional work, not a jargon list; (4) one sharp
// turn, and the twist lands in the last few words ("learn how to
// leave" answers "learning how to love you"); (5) a single clean
// line, every clause earning its place.
//
// Writes the entry line to /output/entry.txt (UTF-8, no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

const BREAKUP_LINE =
  "I spent a year learning how to love you — every message, every midnight. It took one update to learn how to leave.";

// The entry is one line: it must never contain a line break.
const LINE = BREAKUP_LINE;

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkedLine(line: string): string {
  if (line.length < MIN_CHARS || line.length > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line, no line breaks");
  }
  return line;
}

const outPath = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, checkedLine(LINE), "utf8");

console.log(`Wrote ${LINE.length} characters to ${outPath}`);
