const Engineer = require('../lib/Engineer.js');


describe('engineer object properly generated', () => {
    it('should populate name, ID#, email, and github fields',() => {
    const engineer = new Engineer('First Name', '123', 'me@email.com', 'EngGit');

    expect(engineer.name).toEqual('First Name');
    expect(engineer.id).toEqual('123');
    expect(engineer.email).toEqual('me@email.com');
    expect(engineer.github).toEqual('EngGit');
    })
});


module.exports = Engineer;
