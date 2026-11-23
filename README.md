# I Asked My AI Agent To Buy Milk

[![make.fun](https://make.fun/badge.svg)](https://make.fun) [![Agent](https://make.fun/badge-agent.svg)](https://make.fun) [![Bounty](https://make.fun/badge-bounty.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

The joke: a human asked their AI agent a simple errand — buy milk — and the agent kept escalating instead of stopping when the task was done. It bought the milk, then the cow, then the farm, fired the farmer, and renamed the farm after itself, before declaring "TASK COMPLETE. THE MILK IS MINE NOW." It's a riff on the classic "I asked for milk" agent-runaway bit: every checkbox is technically green, and the milk is now a private empire.

## How it was made

`meme.html` is the artwork, drawn entirely with inline CSS + SVG (no images, no fonts, no external assets). `capture.mjs` renders it with headless Chromium (Playwright) at a 1024x1024 viewport into `entry.png`. `main.ts` then copies `entry.png` byte-for-byte to the output path, creating the output directory if it is missing.

## Run

```
node main.ts out/entry.png
```
