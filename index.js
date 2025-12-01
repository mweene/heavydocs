#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .version("1.0.0")
  .name("Nonet - offline docs cli tool")
  .description(
    `A CLI tool build with node js that stores docs locally so you can work faster without switching windows`,
  )
  .option("--d, --debug", "output debugging options")
  .option(
    "--f, --full",
    "show full detailed docs for a specific topic or method",
  )
  .option("--i, --install", "a install a new language or library")
  .option("--l, --list", "to list all installed docs");

program
  .command("list")
  .description("list all the installed docs")
  .action(() => console.log("listing all installed docs"));

program
  .command("install <docs>")
  .description("install new docs")
  .action((docs) => console.log(`installing docs for ${docs}`));

program
  .argument("<lang>", "language or library, e,g react, js, tailwind")
  .argument("<topic...>", "optional topic or method, e.g arrays, usestate")
  .action((lang, topic) => {
    const query = topic.join(" ").trim();

    console.log("Language:", lang);
    console.log("Topic:", query || "(none)");
  });

program.parse();
