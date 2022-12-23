// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML.js');

//Employee type classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//empty array to store team information
const teamRoster = [];

// manager questions
const addManager = async () => {
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

// employee questions
const addEmployee = async () => {

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
        // unique to engineer
        {
            message: "Please enter the Engineer's GitHub username.",
            name: "github",
            when: (input) => input.role === "Engineer"
        },
        // unique to Intern
        {
            message: "Please enter the Intern's school.",
            name: "school",
            when: (input) => input.role === "Intern"
        },
        // addMore employees question
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add more team members?',
            when: (input) => input.role !== "None"
        }
    ])

    // push employee info to TeamRoster array
    // saves info depending on class
    .then(employeeInfo => {
        console.log(employeeInfo);
        if (employeeInfo.role === "Engineer") {
            const { name, id, email, github} = employeeInfo;
            const engineer = new Engineer (name, id, email, github);
            teamRoster.push(engineer);
            console.log(teamRoster);

        } else if (employeeInfo.role === "Intern") {
            const { name, id, email, school } = employeeInfo;
            const intern = new Intern (name, id, email, school);
            teamRoster.push(intern);
            console.log(teamRoster);
        }

        // repeats function , or starts writing HTML
        if (addEmployee.addMore) {
            return addEmployee(teamRoster); 
        } else {
            return generateHTML(teamRoster)
            };
        }
    )}
            

//initiate function
addManager()

