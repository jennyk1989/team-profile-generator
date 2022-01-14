//import required Node modules
const fs = require('fs'); //FileSystem module for writing files
const inquirer = require('inquirer'); //Inquirer module for handling user prompts

//import other required files
//Employee.js not required (imported via other files)
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');