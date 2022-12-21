// The first class is an Employee parent class 

const Employee = require("./Employee");


// The other three classes will extend Employee.
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github
    }

 // In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()

    getGithub() {
        return this.github;
        console.log(`GitHub: ${this.github}`);  
    }

// getRole() // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;
