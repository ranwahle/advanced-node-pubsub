import MainClass from ".";

test('Create main class', () => {
    const mainClass = new MainClass();
    expext(mainClass).toBeTruthy();
})