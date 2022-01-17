// import Intern module
const Intern = require("../lib/Intern");

// test school
test('gets school of intern', () => {
    const intern = new Intern('Jack', 80, 'mock@gmail.com', 'Hogwarts');
    expect(intern.school).toEqual(expect.any(String));
});

// test getSchool() method
test('getSchool should return the school of intern', () => {
    const intern = new Intern('Jack', 80, 'mock@gmail.com', 'Hogwarts');
    expect(intern.getSchool()).toEqual(expect.stringContaining('Hogwarts'));
});

//test getRole() method
test('gets role of intern', () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});