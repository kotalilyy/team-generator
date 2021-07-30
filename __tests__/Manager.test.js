const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Sarah", 1, "test@test.com", testValue, "Manager");
  expect(e.officeNumber).toBe(testValue);
});
