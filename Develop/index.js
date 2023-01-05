import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js';
console.log('Welcome to README Bot 9000!');
console.log('Please answer README Bot 9000`s questions to quickly and easily create a README for your project!');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended way to use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project covered under?',
        choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributing parties to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?'
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function writeToFile() {
//     fs.writeFile('README.md', readmeData, function(error) {
//         if(error) {
//             console.log('File was not able to be saved', error)
//         } else {
//             console.log('README Bot 9000 generated your README file successfully!')
//         }
//     });
// };


function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readmeData = generateMarkdown(data);
        fs.writeFile('README.md', readmeData, function(error) {
                    if(error) {
                        console.log('File was not able to be saved', error)
                    } else {
                        console.log('README Bot 9000 generated your README file successfully!')
                    }
                });
        console.log(readmeData);
        return data;
    })
    .catch((error) => {
        console.log(error)
    });
};

init();





// TODO: Include packages needed for this application

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
