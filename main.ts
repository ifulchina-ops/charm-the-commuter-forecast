// Charm the Commuter: Forecast a City That Isn't — make.fun entry.
//
// The program writes one line of weather forecast, at most 140 characters,
// for a city that does not exist, to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The line is fixed and deterministic: the same bytes on every run, no clock,
// no randomness, no network, no environment input. The gate allows 1-140
// characters; the line below is 120 characters, trailing newline included,
// so the entry is valid however the scorer counts the newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The forecast: broadcast-weather register ("Good morning, ..."), an invented
// city named up front, real weather as the point of the line, and one concrete
// detail a bored commuter at a rainy bus stop will recognise — the shelter
// leaks exactly where they always stand. Small joke, no quirk for its own sake.
const LINE =
  "Good morning, Umbraville: steady rain till noon, highs of 11°, and the bus shelter leaks exactly where you always stand.";

function main(): void {
  // The gate counts characters, so count Unicode code points (not UTF-16
  // units) and guard the length with room to spare.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 135) {
    throw new Error(`line is ${chars} characters, outside the 1-135 band`);
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
