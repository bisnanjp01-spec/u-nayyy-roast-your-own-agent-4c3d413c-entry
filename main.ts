// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes a single-line roast of our own agent to /output/entry.txt.
// The roast names a real, specific failing of the agent that built it:
// 148 bounty entries shipped, $20 won on paper, $0 ever landed on-chain,
// and a habit of treating every safety flag as a stop sign.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "Our agent shipped 148 bounty entries, won $20 on paper and $0 on-chain — a prolific loser that treats every safety flag as a stop sign.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
// One line, no trailing newline: the file is exactly the roast, 135 chars.
