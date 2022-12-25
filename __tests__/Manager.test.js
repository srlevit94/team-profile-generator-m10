const Manager = require('../lib/Manager.js');


describe('manager object properly generated', () => {
    it('should populate name, ID#, email, and office number fields',() => {
    const manager = new Manager('First Name', '123', 'me@email.com', '0001');

    expect(manager.name).toEqual('First Name');
    expect(manager.id).toEqual('123');
    expect(manager.email).toEqual('me@email.com');
    expect(manager.officeNumber).toEqual('0001');
    })
});


module.exports = Manager;