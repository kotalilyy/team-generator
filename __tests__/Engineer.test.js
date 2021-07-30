const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Sarah", 1, "test@test.com", testValue, "Engineer");
  expect(e.github).toBe(testValue);
});
