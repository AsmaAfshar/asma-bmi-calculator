#! /urs/bin/env node
// BMI CALCULATOR USING INQUIRER PROMPT
import inquirer from "inquirer";
const questions = [
    { type: 'number', name: 'weight', massage: 'weight(kg):' },
    { type: 'number', name: 'height', massage: 'height(m):' },
];
const calculatorBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(`BMI ${calculatorBMI(weight, height).toFixed(2)}`);
};
main();
