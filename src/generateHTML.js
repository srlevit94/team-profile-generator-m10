
const generateManagerCard = function (manager) {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">${manager.name}<br /><br />Role</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.id}</li>
                    <li class="list-group-item">${manager.email}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                </ul>
    </div>
    `;
}

const generateEngineerCard = function (engineer) {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">${engineer.name}<br /><br />Role</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.id}</li>
                    <li class="list-group-item">${engineer.email}</li>
                    <li class="list-group-item">${engineer.github}</li>
                </ul>
    </div>
    `;
}

const generateInternCard = function (intern) {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">${intern.name}<br /><br />Role</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.id}</li>
                    <li class="list-group-item">${intern.email}</li>
                    <li class="list-group-item">${intern.school}</li>
                </ul>
    </div>
    `;
}

generateHTML = (data) => {

    // array for cards 
    teamRosterArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamRosterArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamRosterArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamRosterArray.push(internCard);
        }
        
    }
    // joining strings 
    const employeeCards = teamRosterArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>

        <div class="d-flex align-content-start flex-wrap  ">
        ${employeeCards}
        </div>
    </body>

    </html>
    `;
}

module.exports = generateHTML;