const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "employee_db",
    },
    console.log("connected!")
  );


const startApp = async () => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role", "Quit"]
    })
    switch (ans.options) {
        case "View All Departments":
            await viewAllDepts();
            break;
        case "View All Roles":
            await viewAllRoles();
            break;
        case "View All Employees":
            await viewAllEmployees();
            break;
        case "Add A Department":
            await addDept();
            break;
        case "Add A Role":
            await addRole();
            break;
        case "Add An Employee":
            await addEmployee();
            break;
        case "Update An Employee Role":
            await updateEmployeeRole();
            break;
        case "Quit":
            console.log("Bye!");
            break;
    }
    // err catch here
}

// view all depts ()
    // shown formatted table showing department names and department ids

// view all roles ()
    // shown formatted table showing job titles, role ids, department that role belongs to, & salaries

// view all employees ()
    // shown formatted table showing employee ids, first names, last names, job titles, departments, salaries, and managers employee reports to

// add dept ()
    // prompted to enter name of department
    // department is then added to database

// add role ()
    // prompted to enter name, salary, and department role is in
    // role is added to database

// add employee ()
    // prompted to enter first name, last name, role, and manager of employee
    // employee is added to database

// update employee role ()
    // prompted to select an employee and enter new role
    // role of employee is updated in database



startApp();