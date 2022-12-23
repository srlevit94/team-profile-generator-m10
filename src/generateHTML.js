const fs = require("fs");


const generateManagerCard = (data) => {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">Manager Name: ${data.getName()}<br /><br />Role: Manager </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getEmail()}</li>
                    <li class="list-group-item">Office #: ${data.officeNumber}</li>
                </ul>
    </div>
    `;
}

const generateEngineerCard = (data) => {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">Name: ${data.getName()}<br /><br />Role: ${data.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getEmail()}</li>
                    <li class="list-group-item">Github Username: ${data.github}</li>
                </ul>
    </div>
    `;
}

const generateInternCard = (data) => {
    return `
    <div class="card mx-auto m-3" style="width: 18rem">
            <h5 class="card-header">Name:${data.getName()}<br /><br />Role: ${data.getRole()} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: ${data.getId()}</li>
                    <li class="list-group-item">School: ${data.getId()}</li>
                </ul>
    </div>
    `
};

// adds HTML based on Role tpye
const makeCards = data => {

    //stores HTML for cards
    let cardList = '';
    console.log('makeCards is running')
    
    // generates HTML based on responses and adds to cardList variable
    for (i=0 ; i < data.length; i++) {
        console.log("data");
        // console.log(data[i])
    
        if (data[i].getRole() === 'Manager') {
            cardList += generateManagerCard(data[i]);
            console.log('manager card made');
        }
        else if (data[i].getRole()  === 'Intern'){
            cardList += generateInternCard(data[i]);
            console.log('intern card made');
        }
        else if (data[i].getRole()  === 'Engineer') {
            cardList += generateEngineerCard(data[i]);
            console.log('engineer card made');
        }
    }
    //confirms final list to console
    console.log(cardList);
    console.log('cardList ran');
    return cardList;
}
 // writes main HTML to store cards in
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
    `
    
};


module.exports = generateHTML