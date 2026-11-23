import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const here = path.dirname(path.resolve(process.argv[1]));
const entryPath = path.join(here, 'entry.png');
const outputPath = process.argv[2] ?? './out/entry.png';

let data: Buffer;
try {
  data = readFileSync(entryPath);
} catch {
  console.error(`error: entry.png is missing at ${entryPath}`);
  process.exit(1);
}

mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, data);
console.log(`Wrote ${data.length} bytes to ${outputPath}`);
process.exit(0);
