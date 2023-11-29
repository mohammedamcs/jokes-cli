import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

// In order to improve the console render, some operation must be completed!
export const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

// Clear the console
export const clear = () => console.clear();

// line break
export const lineBreak = () => console.log("");

// spinner
export const spinner = async (msg, time) => {
  // Clear Console
  clear();
  // Create Spinner
  const spinner = createSpinner(msg).start();
  // Wait for spinner animation
  await sleep(time);
  // Terminate spinner
  spinner.success();
};

// Welcome user
export async function welcome() {
  // first render logo
  figlet("CLI TOOL FOR JOKES", function (err, data) {
    if (!err) {
      chalkAnimation.rainbow(data);
    }
  });
  // wait for the logo to finish
  await sleep(2500);
  console.log(`${chalk.bgBlue.bold(" Welcome to joke cli ")}
        I am a process on your computer that uses ${chalk.black.bgRed(
          "jokeAPI"
        )}.
        which will provide jokes for you, but first let me know a little about you!
    `);
}

// Show joke
export function showJoke(joke) {
  let jokeContent;
  if (joke.type === "single") {
    jokeContent = joke.joke;
  } else {
    jokeContent = joke.setup + "\n" + joke.delivery;
  }
  lineBreak();
  console.log(
    chalk.black.bgGreen("Category: " + joke.category + " | type: " + joke.type)
  );
  lineBreak();
  console.log(chalk.black.bgWhite(jokeContent));
  lineBreak();
}
