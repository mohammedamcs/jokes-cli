#!/usr/bin/env node
import chalk from "chalk";
import { lineBreak, showJoke, spinner, welcome } from "./logUI.js";
import { menu } from "./menu.js";
import { askForContinue, askForName } from "./questions.js";
import { getJoke } from "./utlis.js";

(async () => {
  // Welcome message
  await welcome();
  // Ask for user name
  const name = await askForName();
  // Animation
  if (name !== "Anonymous") {
    await spinner("Saving your name...", 1500);
  }
  await spinner("Loading Our Cool Menu...", 1000);
  // Start
  let exitLoop = false;
  while (!exitLoop) {
    // show menu
    const answers = await menu(name);
    // Animation
    await spinner("Searching for a joke...", 1500);
    // get joke based on answers
    const joke = await getJoke(answers);
    // Animation
    if (joke) {
      await spinner("Here is a joke for you...");
      // Show joke
      showJoke(joke);
    } else {
      lineBreak();
      console.log(
        chalk.bgRed(
          "Some thing went wrong, please check your internet connection\n"
        )
      );
    }
    // Ask if user want to continue or not
    if ((await askForContinue()) === "no") {
      exitLoop = true;
      await spinner("Good Bye, see you later");
    } else {
      await spinner("Loading Our Cool Menu Again...");
    }
  }
})();
