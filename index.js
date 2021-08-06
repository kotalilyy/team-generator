const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./controllers/Manager");
const Engineer = require("./controllers/Engineer");
const Intern = require("./controllers/Intern");
const render = require("./utils/htmlRenderer");

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "engineers.html");

const employees = [];

function managerPrompt() {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of your project manager?",
      },
      {
        name: "id",
        message: "What is your project manager's employee ID?",
      },
      {
        name: "email",
        message: "What is your project manager's email address?",
      },
      {
        name: "officeNumber",
        message: "What is your project manager's office number?",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      employees.push(manager);
      getRole();
    });
}
function getRole() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Add an employee and select their role",
        choices: ["Intern", "Engineer", "Finish with employees"],
      },
    ])
    .then((answer) => {
      if (answer.role === "Engineer") {
        addEngineer();
      } else if (answer.role === "Intern") {
        addIntern();
      } else {
        fs.writeFileSync(outputPath, render(employees), "utf-8");
        console.log("Here's your team!");
      }
    });
}
function addEngineer() {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of the engineer?",
      },
      {
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        name: "github",
        message: "What is the engineer's Github username?",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      employees.push(engineer);
      getRole();
    });
}
function addIntern() {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of the intern?",
      },
      {
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        name: "school",
        message: "Where did the intern attend school?",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      employees.push(intern);
      getRole();
    });
}

managerPrompt();
