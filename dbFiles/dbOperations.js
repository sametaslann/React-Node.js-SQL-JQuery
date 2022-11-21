const config = require("./dbConfig"),
  sql = require("mssql");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query("SELECT * FROM EmployeesTable");
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const createEmployee = async (Employee) => {
  try {
    let pool = await sql.connect(config);

    if (
      Employee.EmployeeID === 0 ||
      Employee.Firstname === "" ||
      Employee.Lastname === "" ||
      Employee.Age === 0 ||
      Employee.Gender === ""
    ) {
      throw new Error("Boş olamaz");
    }

    let employees = pool
      .request()
      .query(
        `exec operation 1,${Employee.EmployeeID}, '${Employee.Firstname}', '${Employee.Lastname}', ${Employee.Age}, '${Employee.Gender}'`
      );

    console.log(employees);
    // return employees;
  } catch (error) {
    console.log(error);

    return error;
  }
};

const removeEmployees = async (employee) => {
  try {
    let pool = await sql.connect(config);
    const Id = employee.EmployeeID;
    let employees = await pool.request().query(`exec operation 2, ${Id} `);
    console.log(employees);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  removeEmployees,
};
