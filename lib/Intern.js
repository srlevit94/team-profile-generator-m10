const Employee = require("./Employee")

// The other three classes will extend Employee.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        // In addition to Employee's properties and methods, Intern will also have:
        // school
        this.school = school;
    }

// getSchool()
    getSchool() {
        return this.school;
        console.log(`School: ${this.school}`);
    }
// getRole() // Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
}
