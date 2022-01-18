// Intern = Employee + school, getSchool(), & getRole()

// import the Employee class/constructor
const Employee = require("./Employee");

// create Intern class/constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email); // get these properties from Employee via super method
        this.school = school; // adds in school property
    }
    // getSchool() method
    getSchool () {
        return this.school;
    }
    // getRole() method -> overriden to return 'Intern'
    getRole () {
        return 'Intern';
    }
};

// export Intern class/constructor
module.exports = Intern;

