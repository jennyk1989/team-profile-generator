//Engineer = Employee + github username, getGithub(), getRole()

//import/require Employee class
const Employee = require("./Employee");

//create Engineer Class/Constructor
class Engineer extends Employee { //want Engineer class to inherit Employee class so use extends
    constructor (name, id, email, github) {
        super (name, id, email); //reference properties of Employee class with super
        this.github = github; //add github username to Engineer constructor
    }
    // getGithub() method
    getGithub() {
        return this.github; 
    }
    // getRole() method -> override to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

// export this Engineer class
module.exports = Engineer;