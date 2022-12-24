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
    .then(data => { 
        const { name, id, email, officeNumber } = data;
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
                "None, build my page!"
            ]
        },
        {
            message: "Please enter the employee's name.",
            name: "name",
            when: (data) => data.role !== "None, build my page!"
        },
        {
            message: "Please enter the employee's ID number.",
            name: "id",
            when: (data) => data.role !== "None, build my page!"
        },
        {
            message: "Please enter the employee's email address.",
            name: "email",
            when: (data) => data.role !== "None, build my page!"
        },
        // unique to engineer
        {
            message: "Please enter the Engineer's GitHub username.",
            name: "github",
            when: (data) => data.role === "Engineer"
        },
        // unique to Intern
        {
            message: "Please enter the Intern's school.",
            name: "school",
            when: (data) => data.role === "Intern"
        }
    ])

    // push employee info to TeamRoster array
    // saves info depending on class
    .then(data => {
        console.log(data);
        if (data.role === "Engineer") {
            const { name, id, email, github} = data;
            const engineer = new Engineer (name, id, email, github);
            teamRoster.push(engineer);
            console.log(teamRoster);
            addEmployee(teamRoster);

        } else if (data.role === "Intern") {
            const { name, id, email, school } = data;
            const intern = new Intern (name, id, email, school);
            teamRoster.push(intern);
            console.log(teamRoster);
            addEmployee(teamRoster);
        } else if (data.role === "None, build my page!") {
            fs.writeFile("./dist/index.html", generateHTML(teamRoster), (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Your team page has been generated!");
                }
              });
        } 
        // repeats function , or starts writing HTML
    })
};
            

//initiate function
addManager()

// .then(writetoHTML(data));
