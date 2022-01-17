// import required Node modules
const fs = require('fs'); //FileSystem module for writing files
const inquirer = require('inquirer'); //Inquirer module for handling user prompts

// import other required files
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML'); //importing the HTML generator

// array to hold the team 
const team = [];

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
            message: 'What is the Employee ID Number of the Manager?'
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
    .then(managerData => {
        let manager = new Manager (managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        team.push(manager);
        menuOptions();
    })
};
// presented with menu with option to add Engineer or Intern or to finish building team
const menuOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Which employee type would you like to add?',
            choices: ["engineer","intern","exit"]
        }
    ])
    .then(selectedOption => {
        if (selectedOption.menu.choices === "engineer") {
            //start Engineer prompts
            engineerInfo();
        } else if (selectedOption.menu.choices === "intern") {
            //start Intern prompts
            internInfo();
        } else {
            fs.writeFile('./dist/index.html', generateHTML(team), err => {
                if (err) {
                    reject(err)
                    return;
                }
            });
        }
    })
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
    //gather the answers to prompts in a Promise
    .then(engineerData => {
        let engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        team.push(engineer);
        console.log(team);
        //return to the menu options
        return menuOptions();
    })
    
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
        { //school
            type: 'input',
            name: 'school',
            message: 'Enter the school of the Intern'
        }
    ])
    .then(internData => {
        let intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        team.push(intern);
        console.log(team);
        //return to the menu options
        return menuOptions();
    })
};

managerInfo()

    