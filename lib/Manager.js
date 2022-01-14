// Manager = Employee + officeNumber & getRole()

// import the Employee class/constructor
const Employee = require("./Employee");

//create Manager constructor/class and extend Employee class into it
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); // super references these properties from Employee class
        this.officeNumber = officeNumber; // adding officeNumber property
    }
    // getRole() method -> overridden to return 'Manager'
    getRole() {
        return 'Manager'
    }
};

// export Manager class/constructor out
module.exports = Manager;