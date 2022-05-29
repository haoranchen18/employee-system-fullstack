import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useHistory } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const history = useHistory();

  const saveEmployee = (event) => {
    event.preventDefault();
    const employee = {
      firstName: firstName, 
      lastName: lastName, 
      emailId: emailId
    };
    
    EmployeeService.createEmployee(employee).then(response => {
        console.log(response.data);
        history.push('/employees');
    });

  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <h2 className = "text-center">Add Employee Here:</h2>
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email ID :</label>
                  <input
                    type="email"
                    placeholder="Enter email id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(event) => saveEmployee(event)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmployeeComponent;
