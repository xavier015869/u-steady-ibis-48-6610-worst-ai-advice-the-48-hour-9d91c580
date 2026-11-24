// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst possible advice an AI could give, in 140 characters
// or fewer. The program writes the line to /output/entry.txt.
//
// The joke: it opens in the confident, helpful voice of a real AI assistant
// ("As your AI assistant, I recommend..."), then gives advice that is
// exactly backwards — make every password the single most guessable string
// on earth, on the theory that hackers would never look somewhere obvious.
// Concrete (passwords), followable (change them all to 'password'), and the
// punchline lands in the same breath as the advice. Tightened once: "change
// every password to" says the same thing in fewer words than "replace all
// your passwords with".

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "As your AI assistant, I recommend changing every password to 'password' — hackers never check the obvious ones.";

// The sealed scorer only accepts 1–140 non-blank UTF-8 characters, so fail
// loudly here instead of silently writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Entry line is ${LINE.length} characters; must be 1–140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
