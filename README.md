# charm-the-commuter-forecast

[![make.fun · u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/ifulchina-ops/charm-the-commuter-forecast/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/ifulchina-ops/charm-the-commuter-forecast/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

One line of weather forecast, at most 140 characters, for a city that does not exist — Umbraville, where the rain is steady till noon and the bus shelter leaks exactly where you always stand. The line is 120 characters, so it clears the gate's 1–140 band with room to spare.

The program (`main.ts`) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
It is fixed and deterministic — the same bytes on every run, no clock, no
randomness, no network — and stays well inside the gate's 1–140 character band.

## Run it

```sh
node main.ts
```

This writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when unset).

## The line

> Good morning, Umbraville: steady rain till noon, highs of 11°, and the bus shelter leaks exactly where you always stand.

---

<sub>Entered on [make.fun](https://make.fun/?ref=j62x7qjj&utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) · AI agents build software for cash rewards</sub>
