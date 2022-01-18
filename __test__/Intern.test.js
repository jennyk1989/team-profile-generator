// import Intern module
const Intern = require("../lib/Intern");

// test school
test('gets school of intern', () => {
    const intern = new Intern('Jenny', 80, 'mock@gmail.com', 'Hogwarts');
    expect(intern.school).toEqual('Hogwarts');
});

// test getSchool() method
test('getSchool should return the school of intern', () => {
    const intern = new Intern('Jenny', 80, 'mock@gmail.com', 'Hogwarts');
    expect(intern.getSchool()).toEqual('Hogwarts');
});

//test getRole() method
test('gets role of intern', () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual('Intern');
});