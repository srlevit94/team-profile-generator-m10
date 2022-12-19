// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML.js');

//Employee classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Initialize a new Employee name object
const Employee = new Employee();
const teamRoster = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const addManager = () => {
    console.log("Hello team manager! Let's start building your team's profile page. Let's start with your own information.");
    return inquirer.prompt ([
        {
        message: "Please enter your full name.",
        name: 'name',
        // validate not blank
        },
        {   
        message: "Please enter your employee ID.",
        name: 'id',
        //valudate not blank
        // validate numerical value
        },
        {   
        message: "Please enter your email address.",
        name: 'email',
        // validate not blank
        // check that email is valid
        },
        {   
        message: "Please enter your office number.",
        name: 'officeNumber',
        // validate not blank
        },
    ])
    .then((managerInfo) => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        teamRoster.push(manager);
    })
}

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const addEmployee = () => {
    return inquirer.prompt([
        {
        type: "list";
        message: "Do you want to keep adding employess to this page?";
        choices:[
            "Yes, add an Engineer.",
            "Yes, add an Intern.",
            "No, lets build the team profile page!"
        ]},
        {
        message: "Please enter the employee's name.";
        name: "name"
        },
        {
        message: "Please enter the employee's ID number.";
        name: "id"
        },
        {
        message: "Please enter the employee's email address.";
        name: "email"
        },
        {
        message: "Please enter the employee's email address.";
        name: "email"
            },
    ])
}

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const engineerQuestions = [
    {   type: 'input',
        message: "Please enter the Engineer's name.",
        name: 'engineer-name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Manager name cannot be blank");
                return false; 
            }
        }
    },
    {   type: 'input',
        message: "Please enter team manager's employee ID.",
        name: 'engineer-id',
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ("Please only enter numerical values")
                return false; 
            } else {
                return true;
            }
        }
    },
    {   type: 'input',
        message: "Please enter team manager's email address.",
        name: 'manager-email',
        // check that email is valid
    },
    {   type: 'input',
        message: "Please enter team manager's office number.",
        name: 'manager-office',
    }
];

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// Init app
// app.init();