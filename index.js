// import required Node modules
const inquirer = require('inquirer'); //Inquirer module for handling user prompts
const fs = require('fs'); //FileSystem module for writing files

// import other required files
const generateHTML = require('./src/generateHTML'); //importing the HTML generator
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array to hold the team 
const team = [];

// start app -> prompted to enter Manager’s name, ID, email, & office number
function managerInfo() {
    inquirer.prompt([
        //Manager's name
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?'
        },
        //Manager's ID
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employee ID Number of the Manager?'
        },
        //Manager's email
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager?',
            //making sure a valid email address is entered:
            validate: email => { 
                validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
                if(validRegex) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!')
                    return false;
                }
            }
        },
        //Manager's office number
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the Manager?',
        }
    ])
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        team.push(manager); //add manager info to the team array
        menuOptions(); //go to menu once manager info entered
    });
}
// presented with menu with option to add Engineer or Intern or to finish building team
function menuOptions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'Which employee type would you like to add?',
            choices: [
                {name: 'Engineer', value: 'addengineer'},
                {name: 'Intern', value: 'addintern'},
                {name: 'Exit', value: 'exit'},
            ],
        },
    ])
    .then( answer => {
        if (answer.menuChoice === 'addengineer') {
            engineerInfo();
        } else if (answer.menuChoice === 'addintern') {
            internInfo();
        } else if (answer.menuChoice === 'exit') {
            writeFile();
        }
    })
}

// Select Engineer option -> prompted to enter Engineer’s name, ID, email, & GitHub username -> taken back to menu
function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the Engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Engineer?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username of the Engineer?',
        },
    ])
    //gather the answers to prompts in a Promise
    .then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        team.push(engineer);
        //return to the menu options
        menuOptions();
    });
}
// Select Intern option -> prompted to enter the Intern’s name, ID, email, & school -> taken back to menu
function internInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the Intern?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Intern?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the Intern?',
        },
    ])
    //gather the answers to prompts in a Promise
    .then(internData => {
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        team.push(intern);
        //return to the menu options
        menuOptions();
    });
}

function writeFile() {
    fs.writeFile('./dist/index.html', generateHTML(team), err => {
        if (err) {
            reject(err);
            return;
        }
    });
}
managerInfo()

    