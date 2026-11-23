import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const url = 'file://' + path.join(dir, 'meme.html');
const out = path.join(dir, 'entry.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.screenshot({ path: out, type: 'png', fullPage: true });
await browser.close();

const buf = readFileSync(out);
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log(`${out}: ${buf.length} bytes, ${width}x${height}`);
