const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateIndexPage = require('./src/generateIndexPage');


  // Manager Questions
  const managerQuestions = [
    { // 0
      type: "input",
      name: "name",
      message: "What is the manager's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter manager's name." }
      }
    },
    { // 1
      type: "input",
      name: "id",
      message: "What is the manager's id?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter manager's id." }
      }
    },
    { // 2
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
      validate: (value) => {
        if (emailValidator.validate(value)) {
          return true;
        } else { return "Please enter a valid email address." }
      }
    },
    { // 3
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
      validate: (value) => {
        if (value) {
          return true;
        } else { "Please enter manager's office number." }
      }
    },
    { // 4
      type: "list",
      name: "addNewEmployee",
      message: "Do you want to add another employee?",
      choices: [ "Yes", "No" ]
    }
  ]

  // Engineer Questions
  const engineerQuestions = [
    { // 0
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter engineer's name." }
      }
    },
    { // 1
      type: "input",
      name: "id",
      message: "What is the engineer's id?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter engineer's id." }
      }
    },
    { // 2
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
      validate: (value) => {
        if (emailValidator.validate(value)) {
          return true;
        } else { return "Please enter a valid email address." }
      }
    },
    { // 3
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter engineer's Github username. " }
      }
    },
    { // 4
      type: "list",
      name: "addNewEmployee",
      message: "Do you want to add another employee?",
      choices: [ "Yes", "No" ]
    }
  ]

  // Intern Questions
  const internQuestions = [
    { // 0
      type: "input",
      name: "name",
      message: "What is the intern's name?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter intern's name." }
      }
    },
    { // 1
      type: "input",
      name: "id",
      message: "What is the intern's id?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter intern's id." }
      }
    },
    { // 2
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
      validate: (value) => {
        if (emailValidator.validate(value)) {
          return true;
        } else { return "Please enter a valid email address." }
      }
    },
    { // 3
      type: "input",
      name: "school",
      message: "What school is the intern attending?",
      validate: (value) => {
        if (value) {
          return true;
        } else { return "Please enter the name of the school." }
      }
    },
    { // 4
      type: "list",
      name: "addNewEmployee",
      message: "Do you want to add another employee?",
      choices: [ "Yes", "No" ]
    }
  ]

// Selects the role
const roleSelect = {
    type: "list",
    name: "selectRole",
    message: "Select what a role to add.",
    choices: [ "Manager", "Engineer", "Intern" ]
}

// Creates a function to write a new index.html file to the dist folder
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully!');
    }
  })
}
// Sets an empty array to group up all the employees from the init function
let teamArray = [];
let managerLock = true;

function init() {
  inquirer
    .prompt(roleSelect)
    .then((answer) => {
      if (answer.selectRole === 'Manager') {
        if (managerLock === false) {
          console.log('You can only have one manager.');
          return init();
        }
        managerLock = false;
        inquirer.prompt(managerQuestions)
        .then((data) => {
          teamArray.push(new Manager(data.name, data.id, data.email, data.officeNumber));
          if (data.addNewEmployee === 'Yes') {
            return init();
          }
          writeToFile('./dist/index.html', generateIndexPage(teamArray));
        });
      } 
      if (answer.selectRole === 'Engineer') {
        inquirer.prompt(engineerQuestions)
        .then((data) => {
          teamArray.push(new Engineer(data.name, data.id, data.email, data.github));
          if (data.addNewEmployee === 'Yes') {
            return init();
          }
          writeToFile('./dist/index.html', generateIndexPage(teamArray));
        });
      }
      if (answer.selectRole === 'Intern') {
        inquirer.prompt(internQuestions)
        .then((data) => {
          teamArray.push(new Intern(data.name, data.id, data.email, data.school));
          if (data.addNewEmployee === 'Yes') {
            return init();
          }
          writeToFile('./dist/index.html', generateIndexPage(teamArray));
        })
      }
    })
}
// Function call to initialize the index.html
init();
