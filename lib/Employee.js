// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        return this.name;
        console.log(`name: ${this.name}`);
    }


    getId() {
        return this.id;
        console.log(`id: ${this.id}`);
    }

    getEmail() {
        return this.email;
        console.log(`email: ${this.email}`);
    }

    getRole() { //Returns 'Employee'
        if (this.name) {
            return "Employee"
        }
    }
};

const employees = [
    new Employee("Shane Levites", 12345, "shane@email.com"),
    new Employee("Dwight Schrute", 67891, "dwight@dunmif.com")
];

module.exports = {
    Employee,
    employees
};