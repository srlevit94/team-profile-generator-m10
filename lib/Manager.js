const Employee = require("./Employee")

// The other three classes will extend Employee.
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        // In addition to Employee's properties and methods, Manager will also have:
        // officeNumber
        this.school = school;
    }

    // getRole() // Overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
};
