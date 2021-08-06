const Engineer = require("../controllers/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer(
    "Cassandra",
    1,
    "cass@test.com",
    testValue,
    "Engineer"
  );
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Cassandra", 1, "cass@test.com", "GithubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Cassandea", 1, "cass@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
