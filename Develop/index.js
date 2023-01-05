import inquirer from "inquirer"

console.log('It runs')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title'
    }
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}

init()





// // TODO: Include packages needed for this application
// const { default: inquirer } = require("inquirer");
// // const fs = require('fs');
// // const generateMarkdown = require('./utils/generateMarkdown.js');
// console.log('Welcome to my README generator');

// // TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of the project?'
//     }
// ];

// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {
// //     fs,writeToFile(fileName, data, (error) => {
// //         if (error) {
// //             return console.log(error);
// //         }
// //         console.log("It Worked");
// //     });
// // };

// // TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions)
//     .then((answers) => {
//         console.log(answers)
//         return answers;
//     })
//     .catch((error) => {
//         console.log(error)
//     });
// };

// // Function call to initialize app
// init();
