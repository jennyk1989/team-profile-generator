//Employee class needs name, id, and email properties & getName(), getID(), getEmail(), getRole() methods

//create Employee class
class Employee {
    constructor (name, id, email) {
        //Employee's properties:
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName() method
    getName() {
        return this.name;
    }
    // getID() method
    getID() {
        return this.id;
    }
    // getEmail() method
    getEmail() {
        return this.email;
    }
    // getRole method, returns 'Employee'
    getRole() {
        return 'Employee';
    }
}

// export Employee Class
module.exports = Employee;