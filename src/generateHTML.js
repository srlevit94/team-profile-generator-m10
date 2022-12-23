const fs = require("fs");


const generateManagerCard = (data) => {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">Manager Name${data.getName()}<br /><br />Role: Manager </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${data.id}</li>
                    <li class="list-group-item">Email:${data.email}</li>
                    <li class="list-group-item">Office #:${data.officeNumber}</li>
                </ul>
    </div>
    `;
}

const generateEngineerCard = (data) => {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">Name:${data.getName()}<br /><br />Role: ${data.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${data.id}</li>
                    <li class="list-group-item">Email:${data.email}</li>
                    <li class="list-group-item">Github Username:${data.github}</li>
                </ul>
    </div>
    `;
}

const generateInternCard = (data) => {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">Name:${data.getName()}<br /><br />Role: ${data.getRole()} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${data.id}</li>
                    <li class="list-group-item">Email:${employee.email}</li>
                    <li class="list-group-item">School:${employee.school}</li>
                </ul>
    </div>
    `
};

const makeCards = data => {

    let cardList = '';
    
    for (i=0 ; i < data.length; i++) {
        // console.log(data[i])
    
        if (data[i].getRole() === 'Manager') {
            cardList += generateManagerCard(data[i]);
        }
        else if (data[i].getRole()  === 'Intern'){
            cardList += generateInternCard(data[i]);
        }
        else if (data[i].getRole()  === 'Engineer') {
            cardList += generateEngineerCard(data[i]);
        }
    }
    console.log(cardList);
    return cardList;
}

const generateHTML = (data) => {   
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
    ${makeCards(data)}
    </div>
    </body>
</html> 
`;

}

    


// fs.writeFile('./dist/index.html', generateHTML(), function (err) {
//     err ? console.log(err) : console.log('HTML Saved!');
// });

module.exports = generateHTML