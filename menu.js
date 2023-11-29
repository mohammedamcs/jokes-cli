import chalk from "chalk";
import inquirer from "inquirer";

export async function menu(name) {
  const answers = await inquirer.prompt([
    {
      name: "category",
      type: "list",
      message: `hello ${chalk.blue(name)}, choose joke category:`,
      choices: ["Any", "Programming", "Misc", "Dark", "Spooky"],
      default() {
        return "Any";
      },
    },
    {
      name: "jokeType",
      type: "checkbox",
      message: `choose joke type:`,
      choices: ["single", "twopart"],
      default() {
        return "single";
      },
    },
  ]);
  return answers;
}
