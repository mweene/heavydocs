//INSTALL, SEARCH, UPDATE
//nonet <command?> <lang?> <query?>
import { colorText } from "../utils/utils.js";
const reservedKeywords = ["search", "install", "remove", "update"];

function validate(command = "search", lang, query) {}

const input = process.argv.slice(2);

if (input.length >= 1 && input.length <= 3) {
  console.log(input);
} else if (input.length === 0) {
  console.error(colorText("no input was provided show nonet docs", "red"));
} else {
  console.error(colorText("input is out of range", "red"));
}
