import inquirer from "inquirer";

export async function askForName() {
  const answer = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "what is your name?",
      default() {
        return "Anonymous";
      },
    }
  ]);
  return answer.name;
}


export async function askForContinue() {
    const answer = await inquirer.prompt([
      {
        name: "continue",
        type: "list",
        message: "Do you want to continue",
        choices:['yes','no'],
        default() {
          return "yes";
        },
      }
    ]);
    return answer.continue;
  }
