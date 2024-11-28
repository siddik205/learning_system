import React from 'react';
import { Link } from 'react-router-dom';

function Java() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        {/* Left Column for the Image */}
        <div className="col-md-4 d-flex justify-content-center">
          <img src="java.png" alt="java logo" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </div>

        {/* Right Column for the Course Information */}
        <div className="col-md-8">
          <h3>Java</h3>
          <p>In computer science, Java is a high-level, object-oriented, statically typed programming language that relies on a software execution platform of the same name, specifically designed to be as independent as possible from the hardware execution platform.</p>
          <p className="fw-bold">Course By: <Link to="/teacher2">Pakija</Link></p>
          <p className="fw-bold">Duration: 5 Hours 30 Minutes</p>
          <p className="fw-bold">Total Enrolled: 0 Students</p>
          <p className="fw-bold">Rating</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Course Videos</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Introduction <button className="btn btn-sm btn-secondary float-end">Play</button>
          </li>
          <li className="list-group-item">
            Introduction <button className="btn btn-sm btn-secondary float-end">Play</button>
          </li>
        </ul>
      </div>

      <h3 className="pb-1 mb-4 mt-5">Related courses <Link href="#" className="float-end">See all</Link></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <Link to=""><img src="uiux.png" className="card-img-top" alt="" /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="">home</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to=""><img src="Ai.png" className="card-img-top" alt="" /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="">home</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Java;