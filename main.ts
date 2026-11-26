// The excuse that almost works — one line, at most 140 characters.
// So close to believable. The cloud ruined it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finished the report. It is in the cloud. The cloud is currently on vacation and has not replied to my emails.";

const MAX = 140;
if (LINE.length < 1 || LINE.length > MAX || !LINE.trim()) {
  console.error(`line must be 1-${MAX} chars, got ${LINE.length}`);
  process.exit(1);
}
// The excuse only almost works because the cloud is the alibi.
if (!LINE.includes("cloud")) {
  console.error("line must name the cloud");
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
