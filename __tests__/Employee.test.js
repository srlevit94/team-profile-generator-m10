const Employee = require('../lib/Employee.js');


describe('employee object properly generated', () => {
    it('should populate name, ID#, and email',() => {
    const employee = new Employee ('First Name', '123', 'me@email.com');

    expect(employee.name).toEqual('First Name');
    expect(employee.id).toEqual('123');
    expect(employee.email).toEqual('me@email.com');
    })
});


module.exports = Employee;