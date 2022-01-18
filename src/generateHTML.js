//Manager = Employee + officeNumber + getRole()
//Engineer = Employee + getGithub() + getRole()
//Intern = Employee + school, getSchool(), & getRole()

//Import Manager, Engineer, & Intern
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// Main HTML (that employee cards are added to):
function generateTeam(team) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mockup</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        </head>
        <body>
            <div class="hero is-info">
                <div class="hero-body">
                    <p class="title has-text-centered"> My Team </p>
                </div>
            </div>
            <div class="section is large">
                <div class="columns">
                ${generateHTML(team)}
                </div>
            </div>    
        </body>
        </html>
    `
};
// Manager Card
function generateManager (Manager) {
    return `
    <div class="card m-6">
        <header class="card-header has-background-primary">
            <p class="card-header-title is-centered has-text-white">Manager: ${Manager.name}</p>
        </header>
        <div class="card-content">
            <div class="field">ID: ${Manager.id} </div>
            <div class="field">Email: ${Manager.email} </div>
            <div class="field">Office Number: ${Manager.officeNumber}</div>
        </div>
    </div>
    `
}

// Engineer Cards
function generateEngineer (Engineer) {
    return `
    <div class="card m-6">
        <header class="card-header has-background-primary">
            <p class="card-header-title is-centered has-text-white">Enginner: ${Engineer.name}</p>
        </header>
        <div class="card-content">
            <div class="field">ID: ${Engineer.id} </div>
            <div class="field">Email: ${Engineer.email} </div>
            <div class="field">Github: ${Engineer.github}</div>
        </div>
    </div>
    `
}
// Intern Cards
function generateIntern (Intern) {
    return `
    <div class="card m-6">
        <header class="card-header has-background-primary">
            <p class="card-header-title is-centered has-text-white">Intern:  ${Intern.name}</p>
        </header>
        <div class="card-content">
            <div class="field">ID: ${Intern.id} </div>
            <div class="field">Email: ${Intern.email} </div>
            <div class="field">School: ${Intern.school}</div>
        </div>
    </div>
    `
}

function generateHTML(team) {
    let teamCards = []; //start an array to store the selected cards
    //forLoop that goes thru the cards & selects it based on certain conditions:
    for (let i=0; i < team.length; i++) {
        const cardArray = team[i];
        //W3 Schools: Use switch statement to select one of many code blocks to be executed.
        switch(cardArray.getRole()) {
            case 'Manager': //use this codeblock if getRole() is 'Manager'
                //codeblock
                const manager = new Manager(cardArray.name, cardArray.id, cardArray.email, cardArray.officeNumber);
                teamCards.push(generateManager(manager)); //push method to add new manager card into teamCards array 
                break;
            case 'Engineer': //use this codeblock if getRole() is 'Engineer'
                //codeblock
                const engineer = new Engineer(cardArray.name, cardArray.id, cardArray.email, cardArray.github);
                teamCards.push(generateEngineer(engineer));
                break;
            case 'Intern': //use this codeblock if getRole() is 'Intern'
                //codeblock
                const intern = new Intern (cardArray.name, cardArray.id, cardArray.email, cardArray.school);
                teamCards.push(generateIntern(intern));
                break;
        } 
    }
    return teamCards.join(''); //join cards in array into a string
}
//export the html
module.exports = generateTeam;



