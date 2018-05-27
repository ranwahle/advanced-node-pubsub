const MainClass = require('./index')

test('Create main class', () => {
    const mainClass = new MainClass();
    expect(mainClass).toBeTruthy();
})