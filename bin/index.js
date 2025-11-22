#!/usr/bin/env mode

import { program } from "commander";

program
  .version("0.0.0")
  .description("Offline docs. Search instantly. Build for the terminal")
  .option("-n, --name <type>", "Enter your name")
  .action((options) => console.log(`Hey, ${options.name}!`));

program.parse(process.argv);
