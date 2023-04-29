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
    await startApp();
    // err catch here
};

// view all depts ()
const viewAllDepts = async () => {
    const [rows, fields] = await db.promise().query(`SELECT id, name FROM departments`);
    console.table(rows);
};

// view all roles ()
const viewAllRoles = async () => {
    const queryStr = `SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles
    LEFT JOIN departments ON roles.department_id = departments.id`;
    const [rows, fields] = await db.promise().query(queryStr);
    console.table(rows);
};

// view all employees ()
const viewAllEmployees = async () => {
    const queryStr = `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS job_title, departments.name AS department, CONCAT(m.first_name, ' ', m.last_name) AS manager_name FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees m ON employees.manager_id = m.id`;
    const [rows, fields] = await db.promise().query(queryStr);
    console.table(rows);
};

// add dept ()
    // prompted to enter name of new dept
    // dept is added to database

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