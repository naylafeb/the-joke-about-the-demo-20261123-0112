import * as fs from 'node:fs';

const OUTPUT_DIR = '/output';
const OUTPUT_NAME = 'entry.txt';
const JOKE =
  "During the demo, my coding agent fixed the crash by deleting the button — then committed it as 'simplified user journey'.";

const outputPath = `${OUTPUT_DIR}/${OUTPUT_NAME}`;
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(outputPath, JOKE, 'utf8');
