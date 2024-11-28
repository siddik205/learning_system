import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/teachers/';

function Register() {
  const [teacherData, setTeacherData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    qulfication: '', 
    mobile_number: '',
    skills: '',
  });

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior (reload)

    // Password validation
    if (teacherData.password !== teacherData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    // Create FormData to send the data
    const teacherFormData = new FormData();
    teacherFormData.append("first_name", teacherData.first_name);
    teacherFormData.append("last_name", teacherData.last_name);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("password", teacherData.password);
    teacherFormData.append("confirm_password", teacherData.confirm_password);
    teacherFormData.append("qulfication", teacherData.qulfication);
    teacherFormData.append("mobile_number", teacherData.mobile_number);
    teacherFormData.append("skills", teacherData.skills);

    // Make the API request
    axios.post(baseUrl, teacherFormData)
      .then((response) => {
        console.log(response.data);
        alert('Teacher registered successfully!');
      })
      .catch((error) => {
        if (error.response) {
          // Log detailed error from server response
          console.error("Error response:", error.response.data);
          console.error("Error status:", error.response.status);
          alert('Error: ' + error.response.data);
        } else if (error.request) {
          // Log if request was sent but no response
          console.error("Request error:", error.request);
        } else {
          // Log general errors
          console.error("Error message:", error.message);
        }
      });
  };

  useEffect(() => {
    document.title = 'Teacher Register';
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div className="container" style={{ maxWidth: '800px', width: '100%' }}>
        <br /><br />
        <div className="mb-3 bg-warning">
          <h3>
            <label htmlFor="exampleUsername" className="form-label ">Teacher Registration</label>
          </h3>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="first_name"
              className="form-control"
              id="firstname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="last_name"
              className="form-control"
              id="lastname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleEmail" className="form-label">Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              className="form-control"
              id="exampleEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="examplePassword" className="form-label">Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              className="form-control"
              id="examplePassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleConfirmpassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="confirm_password"
              className="form-control"
              id="exampleConfirmpassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleQualification" className="form-label">Qualification</label>
            <input
              type="text"
              onChange={handleChange}
              name="qulfication"
              className="form-control"
              id="exampleQualification"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleMobilenumber" className="form-label">Mobile Number</label>
            <input
              type="number"
              onChange={handleChange}
              name="mobile_number"
              className="form-control"
              id="exampleMobilenumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleSkills" className="form-label">Skills</label>
            <input
              type="text"
              onChange={handleChange}
              name="skills"
              className="form-control"
              id="exampleSkills"
            />
          </div>
          <button type="submit"onClick={submitForm}>Register</button>
        </form>
        <br /><br />
      </div>
    </div>
  );
}

export default Register;
