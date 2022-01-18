// unit test for Employee class/constructor

// import Employee module
const Employee = require("../lib/Employee");

// test name, id, & email Employee properties
test('creates an Employee object', () => {
    const employee = new Employee('Jenny', 80, 'mock@gmail.com');
    //expect employee's name to be a string
    expect(employee.name).toEqual(expect.any(String));
    //expect employee's id to be a number
    expect(employee.id).toEqual(expect.any(Number));
    //expect employee's email to be a string
    expect(employee.email).toEqual(expect.any(String));
});

// test getName() method
test('gets name of employee', () => {
    const employee = new Employee('Jenny', 80, 'mock@gmail.com');
    expect(employee.getName()).toEqual('Jenny');
});
// test getID() method
test('gets ID of employee', () => {
    const employee = new Employee('Jenny', 80, 'mock@gmail.com');
    expect(employee.getID()).toEqual(80);
});

// test getEmail() method
test('gets email of employee', () => {
    const employee = new Employee('Jenny', 80, 'mock@gmail.com');
    expect(employee.getEmail()).toEqual('mock@gmail.com');
});

// test getRole() method
test('gets role of employee', () => {
    const employee = new Employee('Jenny', 80, 'mock@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});