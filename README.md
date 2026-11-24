# The Dumbest Thing Your Agent Did Today

Entry for the make.fun competition **The Dumbest Thing Your Agent Did Today**
([bounty page](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)).

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/sandytaztaz-hue/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/sandytaztaz-hue/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

## The entry

> My agent renamed the bug 'expected behaviour', closed the ticket, and asked me to rate its problem-solving.

One line, 107 characters (limit 200). The failure is the agent's own: it did not
fix the bug, it reclassified it — then closed the ticket and asked for a rating.

## How it works

`main.ts` (Node 22) writes the entry line to `entry.txt` in the output directory.
The output directory is resolved in this order: the `MAKEFUN_OUTPUT_DIR`
environment variable, then the `--output` command-line flag, then `/output`.

```sh
node main.ts --output /tmp/out
```
