//Manager = Employee + officeNumber + getRole()
//Engineer = Employee + getGithub() + getRole()
//Intern = Employee + school, getSchool(), & getRole()

//Import Manager, Engineer, & Intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Main HTML (that employee cards are added to):
function generateTeam() {
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
                ${cards}
                </div>
            </div>    
        </body>
        </html>
    `
};
// Manager Card
function generateManager (Manager) {
    return `
    <div class="card">
        <header class="card-header has-background-primary">
            <p class="card-header-title is-centered has-text-white">Manager</p>
        </header>
        <div class="card-content">
            <div class="field">ID: ${employee.id} </div>
            <div class="field">Email: ${employee.email} </div>
            <div class="field">Office Number: ${mangager.officeNumber}</div>
        </div>
    </div>
    `
}

// Engineer Cards


// Intern Cards
