// import required Node modules
const fs = require('fs'); //FileSystem module for writing files
const inquirer = require('inquirer'); //Inquirer module for handling user prompts

// import other required files
// Employee.js not required (imported via other files)
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

/* flow:
start app -> prompted to enter Manager’s name, ID, email, & office number ->
presented with menu with option to add add Engineer or Intern or to finish building team
Select Engineer option -> prompted to enter Engineer’s name, ID, email, & GitHub username -> taken back to menu
Select Intern option -> prompted to enter the Intern’s name, ID, email, & school -> taken back to menu
When done -> exit app -> HTML generated
*/

// start app -> prompted to enter Manager’s name, ID, email, & office number
const managerInfo = () => {
    return inquirer.prompt([
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
            message: 'What is the ID Number of the Manager?'
        },
        //Manager's email
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager?'
        },
        //Manager's office number
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office phone number of the Manager?'
        }
    ])
};
// presented with menu with option to add Engineer or Intern or to finish building team
const menuOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Select one of the following options:',
            choices: ['Add Engineer', 'Add Intern', 'Done building team']
        }
    ])
};

// Select Engineer option -> prompted to enter Engineer’s name, ID, email, & GitHub username -> taken back to menu
const engineerInfo = () => {
    return inquirer.prompt([
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
};
// Select Intern option -> prompted to enter the Intern’s name, ID, email, & school -> taken back to menu
const internInfo = () => {
    return inquirer.prompt([
        { //role
            type: 'list',
            name: 'name',
            message: 'What is the name of the Intern?'
        },
        { //id
            type: 'input',
            name: 'id',
            message: 'Enter the id number of the Intern'
        },
        { //email
            type: 'input',
            name: 'email',
            message: 'Enter the email of the Intern'
        },
        { //email
            type: 'input',
            name: 'school',
            message: 'Enter the school of the Intern'
        }
    ]);
};

const writeFile = data => {
    return new Promise ((resolve, reject) => { 
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'HTML file created!'
            });
        });
    }) 
};
managerInfo()
    .then(data => {
        return generateHTML(data);
    })
    .then(data => {
        return writeFile(data);
    }) 