const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UoU";
    const e = new Intern("Rachelle", 1, "rachelle@test.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Rachelle", 1, "rachelle@test.com", "UT");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "UT";
    const e = new Intern("Rachelle", 1, "rachelle@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });