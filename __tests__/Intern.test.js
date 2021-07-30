const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UoU";
    const e = new Intern("Sarah", 1, "test@test.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});
