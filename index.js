// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML.js');

//Employee type classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const teamRoster = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const addManager = () => {
    console.log("Hello team manager! Let's start building your team's profile page. Let's start with your own information.");
    return inquirer.prompt ([
        {
        type: "input",
        message: "Please enter your full name.",
        name: 'name'
        // validate not blank
        },
        {   
        message: "Please enter your employee ID.",
        name: 'id'
        //valudate not blank
        // validate numerical value
        },
        {   
        message: "Please enter your email address.",
        name: 'email'
        // validate not blank
        // check that email is valid
        },
        {   
        message: "Please enter your office number.",
        name: 'officeNumber'
        // validate not blank
        },
    ])
    // Saves input and adds manager variable to the team
    .then(managerInfo => { 
        const { name, id, email, officeNumber } = managerInfo;
        const employee = new Manager (name, id, email, officeNumber);
        teamRoster.push(employee);
        console.log(employee);
        addEmployee();
    })
};

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const addEmployee = () => {

    return inquirer.prompt([
        {
            type: "list",
            message: "Which employee role do you wish to add next?",
            name: "role",
            choices:[
                "Engineer",
                "Intern",
                "None"
            ]
        },
        {
            message: "Please enter the employee's name.",
            name: "name",
            when: (input) => input.role !== "None"
        },
        {
            message: "Please enter the employee's ID number.",
            name: "id",
            when: (input) => input.role !== "None"
        },
        {
            message: "Please enter the employee's email address.",
            name: "email",
            when: (input) => input.role !== "None"
        },
        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username,
        {
            message: "Please enter the Engineer's GitHub username.",
            name: "github",
            when: (input) => input.role === "Engineer"
        },
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school,
        {
            message: "Please enter the Intern's school.",
            name: "school",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add more team members?',
            when: (input) => input.role !== "None"
        }
    ])


    .then(employeeInfo => {

        if (addEmployee.role === "Engineer.") {
            const { name, id, email, github} = employeeInfo;
            employee = new Engineer (name, id, email, github);
            teamRoster.push(employee);
            console.log(employee);

        } else if (addEmployee.role === "Intern.") {
            const { name, id, email, school } = internInfo;
            employee = new Intern (name, id, email, school);
            teamRoster.push(employee);
            console.log(employee);
        }


        if (addEmployee.addMore) {
            return addEmployee(teamRoster); 
        } else {
            return generateHTML(teamRoster);
        }
    })
            
}

addManager()


