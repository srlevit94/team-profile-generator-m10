// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML.js');

//Employee type classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require('./lib/employee');


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
    .then((managerInfo) => { 
        const manager = new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        teamRoster.push(manager);
        console.log(manager);
        return addEmployee();
    })
};

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const addEmployee = () => {

    return inquirer.prompt([
        {
            type: "list",
            message: "Do you want to keep adding employess to this page?",
            name: "role",
            choices:[
                "Yes, add an Engineer.",
                "Yes, add an Intern.",
                "No, lets build the team profile page!"
            ]
        },
        {
            message: "Please enter the employee's name.",
            name: "name"
        },
        {
            message: "Please enter the employee's ID number.",
            name: "id"
        },
        {
            message: "Please enter the employee's email address.",
            name: "email"
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
            name: "email",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])

    .then((employeeInfo) => {
        let employee = "";

        if (addEmployee.role === "Yes, add an Engineer.") {
            employee = new Engineer (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.github);
            console.log(employee);

        } else if (addEmployee.role === "Yes, add an Intern.") {
            employee = new Intern (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.school);
            console.log(employee);
        }

        teamRoster.push(employee); 
        console.log(employee);

        if (addEmployee.addMore) {
            return addEmployee(teamRoster); 
        } else {
            return writeHTML(teamRoster);
        }
    })
}
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const writeHTML = data => {
    fs.writeFile('./dist/index.html', data, err => 
        err ? console.log(err) : console.log(' Team Profile HTML Webpage successfully generated!')
    );
}

// and I am taken back to the menu 
// funtion to init app
addManager()
//   .then(addEmployee)
//   .then(teamRoster => {
//     return writeHTML(teamRoster);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//     console.log(err);
//   });