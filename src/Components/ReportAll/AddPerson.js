import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import $ from "jquery";
import { useEffect, useState } from "react";
import "datatables.net";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "../../App.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function AddPerson() {
  const [dataCheck, setDataCheck] = useState(false);
  const [employees, setEmployees] = useState([]);
  let initialPerson = {
    EmployeeID: 0,
    Firstname: "",
    Lastname: "",
    Age: 0,
    Gender: true,
  };
  const [person, setPerson] = useState(initialPerson);

  useEffect(() => {
    setDataCheck(false);
    console.log(dataCheck);
    setTimeout(() => {
      $("#dataTable").DataTable().destroy();
      handleFetch();
    }, 1000);
  }, []);

  useEffect(() => {
    $(document).ready(function () {
      $("#table").DataTable();
    });
  }, [employees]);

  const handleFetch = async () => {
    console.log(dataCheck);
    const getDatas = async () => {
      const newData = await fetch("/getEmp", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());

      setEmployees(newData);
      console.log(employees);
      setDataCheck(true);
    };
    getDatas();
  };

  const setForm = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    if (name === "EmployeeID" || name === "Age") {
      setPerson((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }));
      return;
    }

    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const postData = (event) => {
    event.preventDefault();

    const newData = fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...person,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("Boş olamaz"));

    console.log(person);

    setDataCheck(false);
    console.log(newData);
    console.log(dataCheck);
    setEmployees(initialPerson);
    handleFetch();
  };

  const showAlert = (employee) => {
    confirmAlert({
      title: "Confirm to submit",
      message: `Are you sure to delete '${employee.Firstname}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDeleteButton(employee),
        },
        {
          label: "No",
          onClick: () => {
            console.log("Not deleted");
          },
        },
      ],
    });
  };

  const handleDeleteButton = async (employee) => {
    setDataCheck(false);
    console.log(employee);

    console.log("Deleted");
    const newData = await fetch("/deleteEmp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...employee,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    handleFetch();
  };

  if (dataCheck) {
    return (
      <>
        <section className="banner" id="home">
          <form>
            <input
              className="inputStyle"
              name="EmployeeID"
              placeholder="Sicil Numarası"
              onChange={setForm}
            />

            <input
              className="form_field"
              name="Firstname"
              placeholder="İsim"
              onChange={setForm}
            />

            <input
              className="form_field"
              name="Lastname"
              placeholder="Soyisim"
              onChange={setForm}
            />

            <input
              className="form_field"
              name="Age"
              placeholder="Yaş"
              onChange={setForm}
            />

            <label>Male</label>
            <input
              className="checkbox"
              type="radio"
              name="Gender"
              value="Erkek"
              onChange={setForm}
            />

            <label>Female</label>
            <input
              className="checkbox"
              type="radio"
              name="Gender"
              value="Kadın"
              onChange={setForm}
            />

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => postData(e)}
            >
              Submit
            </Button>
          </form>
        </section>
        /////////////////////////////
        <div className="table">
          <table id="table" className="display">
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, i) => (
                <tr
                  key={i}
                  className={i == employees.length - 1 ? "fireRow" : ""}
                >
                  <td>{employee.EmployeeID}</td>
                  <td>{employee.Firstname}</td>
                  <td>{employee.Lastname}</td>
                  <td>{employee.Age}</td>
                  <td>{employee.Gender}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => showAlert(employee)}
                    >
                      X
                    </button>
                  </td>
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
                <th>Delete</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
  return <div className="loader"></div>;
}

export default AddPerson;
