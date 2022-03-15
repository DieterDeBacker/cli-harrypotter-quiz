#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const msg = `🧙 Hello my fellow Harry Potter nerds! 🧙`;
  chalkAnimation.rainbow(msg);

  await sleep();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}
    You must provide a correct answer to all the questions in order to win!
    If you fail... ${chalk.bgRed("Voldemort")} will visit you in your sleep! 
`);
}

async function askName() {
  const answer = await inquirer.prompt({
    type: "input",
    name: "player_name",
    message: "🧙 What is your wizard name?",
    default() {
      return "Player";
    },
  });

  playerName = answer.player_name;
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Good job ${playerName}!` });
  } else {
    spinner.error({
      text: `💀💀💀 Wrong answer ${playerName}, ${chalk.red(
        "Voldemort"
      )} will be coming for you tonight! 💀💀💀`,
    });
    process.exit(1);
  }
}

async function question1() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_1",
    message: "Which animal represents Gryffindor house?",
    choices: ["A snake", "A lion", "An eagle", "A badger"],
  });

  return handleAnswer(answer.question_1 == "A lion");
}

async function question2() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_2",
    message: "What is a `Muggle`?",
    choices: [
      "A non-magical person from a non-magical family",
      "A non-magical person from a magical family",
      "A magical person who is really bad at magic",
      "A magical person with only one magical parent",
    ],
  });

  return handleAnswer(
    answer.question_2 == "A non-magical person from a non-magical family"
  );
}

async function question3() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_3",
    message:
      "True or False: Professor Dumbledore's spectacles are rectangular?",
    choices: ["True", "False"],
  });

  return handleAnswer(answer.question_3 == "False");
}

async function question4() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_4",
    message:
      "Which Hogwarts student says, `I don't go looking for trouble. Trouble usually finds me`?",
    choices: ["Fred Weasley", "Harry Potter", "Ron Weasley", "Draco Malfoy"],
  });

  return handleAnswer(answer.question_4 == "Harry Potter");
}

async function question5() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_5",
    message: "Members of Ravenclaw house are known for which two things?",
    choices: [
      "Loyalty & Wit",
      "Cunning & Intelligence",
      "Loyalty & Cunning",
      "Intelligence & Wit",
    ],
  });

  return handleAnswer(answer.question_5 == "Intelligence & Wit");
}

async function question6() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_6",
    message: "What do you say when you cast a Summoning Charm?",
    choices: ["Avis", "Aparecium", "Accio", "Anapneo"],
  });

  return handleAnswer(answer.question_6 == "Accio");
}

async function question7() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_7",
    message: "What colour is the Hogwarts Express?",
    choices: ["Emerald", "Green", "Indigo", "Scarlet"],
  });

  return handleAnswer(answer.question_7 == "Scarlet");
}

async function question8() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_8",
    message: "How are parcels and letters sent in the wizarding world?",
    choices: [
      "Via wizard postmen",
      "Via broomstick",
      "Via the Floo Network",
      "Via owls",
    ],
  });

  return handleAnswer(answer.question_8 == "Via owls");
}

async function question9() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_9",
    message:
      "Which Hogwarts student says, `Just because you've got the emotional range of a teaspoon doesn't mean we all have`?",
    choices: [
      "Pansy Parkinson",
      "Ginny Weasley",
      "Cho Chang",
      "Hermoine Granger",
    ],
  });

  return handleAnswer(answer.question_9 == "Hermoine Granger");
}

async function question10() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "question_10",
    message:
      "What do Harry and Ron crash into when they fly Arthur Weasley's Ford Anglia to Hogwarts?",
    choices: [
      "The Whomping Willow",
      "The Great Lake",
      "The Hogwarts Express",
      "The Astronomy Tower",
    ],
  });

  return handleAnswer(answer.question_10 == "The Whomping Willow");
}

async function winner() {
  console.clear();
  const msg = `Good job ${playerName}, you defeated Voldemort!`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
winner();
