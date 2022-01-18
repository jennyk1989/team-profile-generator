// import Engineer module
const Engineer = require("../lib/Engineer");

// test github property
test('gets github name of Engineer', () => {
    const engineer = new Engineer('Jack', 80, 'mock@gmail.com', 'Jack123');
    expect(engineer.github).toEqual('Jack123');
});

//test getGithub() method
test('gets github name of Engineer', () => {
    const engineer = new Engineer('Jack', 80, 'mock@gmail.com', 'Jack123');
    expect(engineer.getGithub()).toEqual('Jack123');
});

// test getRole() method
test('gets role of Engineer', () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual('Engineer');
});
