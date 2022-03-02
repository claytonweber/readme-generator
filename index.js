// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const genMark = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const userQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Give a description of your project',
      name: 'description'
    },
    {
      type: 'input',
      message: 'List the Table of Contents',
      name: 'contents'
    },
    {
      type: 'input',
      message: 'How is it installed?',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'What is the usage?',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'What type of license is used?',
      choices: [
        'Apache 2.0', 
        'MIT', 
        'Mozilla Public License v2.0',
        'Boost Software License 1.0',
        'ISC',
        'GNU General Public License v3.0'
      ],
      name: 'license'
    },
    {
      type: 'input',
      message: 'How can someone contribute?',
      name: 'contribution'
    },
    {
      type: 'input',
      message: 'What tests have been done?',
      name: 'tests'
    },
    {
      type: 'input',
      message: 'Any questions?',
      name: 'questions'
    }
  ])
};



const init = () => {
  userQuestions()
    .then((data) => fs.writeFileSync('README.md', genMark.generateMarkdown(data)))
    .then(() => console.log("it worked??"))
    .catch((err) => console.error(err));
}
  
init();