// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadmeContent = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is your project installed?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can your project be tested?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
  

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  }
  

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateReadmeContent(answers);
      writeToFile('README.md', readmeContent);
    });
  }

  // Function call to initialize app
  init();
