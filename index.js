const inquirer = require('inquirer');
const fs = require('fs');
const generateIndexPage = require('./src/generateIndexPage');
const emailValidator = require('email-validator');

const questions = {
  // Manager Questions
  Manager: [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter manager's name." }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's id?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter manager's id." }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
      validate: (value) => {
        if (emailValidator.validate(value)) {
          return true;
        } else { return "Please enter a valid email address." }
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
      validate: (value) => {
        if (value) {
          return true;
        } else { "Please enter manager's office number." }
      }
    },
    {
      type: "list",
      name: "addNewEmployee",
      message: "Do you want to add another employee?",
      choices: [ "Yes", "No" ]
    }
  ],
  
  // Engineer Questions
  Engineer: [

  ]
}

// Creates a function to write a new index.html file to the dist folder
// function writeToFile(fileName, data) {
//     fs.writeToFile(fileName, data, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     })
// }

// function init() {
//     inquirer
//         .prompt(questions)
//         .then( (data) => {
//             writeToFile('index.html', data)
//         })
// }

// Function call to initialize the index.html
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated