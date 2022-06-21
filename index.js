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
  fs.writeToFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
  })
}
// seperate manager into its own function
let teamArray = [];
let managerLock = true;
function init() {
  inquirer
    .prompt(roleSelect)
    .then((answer) => {
      if (answer.selectRole === 'Manager' && managerLock) {
        managerLock = false;
        return inquirer.prompt(managerQuestions).then((data) => {
          teamArray.push(new Manager(data.name, data.id, data.email, data.officeNumber));
          if (data.addNewEmployee === 'Yes') {
            init();
            return;
          }
        });
      }
      else if (answer.selectRole === 'Engineer') {
        return inquirer.prompt(engineerQuestions);
      }
      else if (answer.selectRole === 'Intern') {
        return inquirer.prompt(internQuestions);
      } else {
        console.log('You can only have one manager.')
        init();
      }
    })
    .then(() => {
      // Write file goes here?
      writeToFile('./dist/index.html', generateIndexPage(teamArray));
    })
}
// const managerObj = new Manager(data.name, data.id, data.email, data.officeNumber);
// const engineerObj = new Engineer(data.name, data.id, data.email, data.github);
// const internObj = new Intern(data.name, data.id, data.email, data.school);

// writeToFile('./dist/index.html', data)

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