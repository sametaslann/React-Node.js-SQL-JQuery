const { appBarClasses } = require("@mui/material");
const express = require("express"),
  dbOperations = require("./dbFiles/dbOperations"),
  cors = require("cors");
const Employee = require("./dbFiles/employee");

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/api", async (req, res) => {
  console.log("Called post request");

  let body = req.body;
  console.log(body);

  let person = new Employee(
    body.EmployeeID,
    body.Firstname,
    body.Lastname,
    body.Age,
    body.Gender
  );

  const result = await dbOperations.createEmployee(person);
});

app.get("/getEmp", async (req, res) => {
  console.log("Called get request");
  const result = await dbOperations.getEmployees();
  res.send(result.recordset);
});

app.post("/deleteEmp", async (req, res) => {
  console.log("Called delete request");
  const result = await dbOperations.removeEmployees(req.body);
  //res.send(result.recordset);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
