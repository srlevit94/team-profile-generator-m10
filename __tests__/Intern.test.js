const Intern = require('../lib/Intern.js');


describe('Intern object properly generated', () => {
    it('should populate name, ID#, email, and school fields',() => {
    const intern = new Intern('First Name', '123', 'me@email.com', 'UCLA Ext');

    expect(intern.name).toEqual('First Name');
    expect(intern.id).toEqual('123');
    expect(intern.email).toEqual('me@email.com');
    expect(intern.school).toEqual('UCLA Ext');
    })
});


module.exports = Intern;