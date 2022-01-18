//import Manager module
const Manager = require("../lib/Manager");

// test officeNumber
test('gets office number of Manager', () => {
    const manager = new Manager ('Jenny', 80, 'mock@gmail.com', 989);
    expect(manager.officeNumber).toEqual(989);
});

// test getRole method
test('gets role of employee', () => {
    const manager = new Manager();
    expect(manager.getRole()).toEqual('Manager');
});