#!/usr/bin/env mode
//ENTRY POINT
import data from "../docs/index.json" with { type: "json" };

const input = process.argv.slice(2);

console.log(data);
