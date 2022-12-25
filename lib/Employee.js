
// Creates 'Employee' parent class with name, id, and email method
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //returns name and confirms to console
    getName() {
        return this.name;
        console.log(`name: ${this.name}`);
    }

    //returns id and confirms to console
    getId() {
        return this.id;
        console.log(`id: ${this.id}`);
    }

    //returns email and confirms to console
    getEmail() {
        return this.email;
        console.log(`email: ${this.email}`);
    }

    //returns that person is and Employee
    getRole() { //Returns 'Employee'
        return "Employee";
    }
};



// Exports class and sample employees
module.exports = Employee;