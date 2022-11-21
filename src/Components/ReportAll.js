import $ from "jquery";
import { useEffect, useState } from "react";
import "datatables.net";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "../App.css";

function App() {
  const [dataCheck, setDataCheck] = useState(false);
  const [employeess, setEmployeess] = useState([]);

  useEffect(() => {
    $("#table").DataTable();
  }, [employeess]);

  const handleFetchButton = () => {
    console.log(dataCheck);
    const getDatas = async () => {
      const newData = await fetch("/getEmp", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());

      setEmployeess(newData);
      console.log(employeess);
    };
    getDatas();
    setDataCheck(true);
  };

  return (
    <>
      {dataCheck ? (
        <div className="table">
          <table id="table" className="display">
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {console.log(employeess)}
              {employeess.map((employee, i) => (
                <tr key={i}>
                  <td>{employee.EmployeeID}</td>
                  <td>{employee.Firstname}</td>
                  <td>{employee.Lastname}</td>
                  <td>{employee.Age}</td>
                  <td>{employee.Gender}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="banner">
          <button onClick={handleFetchButton}>Fetch</button>
        </div>
      )}
    </>
  );
}

export default App;

{
  /* <div className="table">
      <table id="table" className="display">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {console.log(employees)}
          {employees &&
            employees.foreach((employee) => (
              <tr>
                <td>{employee.EmployeeID}</td>
                <td>{employee.Firstname}</td>
                <td>{employee.Lastname}</td>
                <td>{employee.Age}</td>
                <td>{employee.Gender}</td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </tfoot>
      </table>
    </div> */
}
