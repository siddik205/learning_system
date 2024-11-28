import React from 'react';
import { Link } from 'react-router-dom';

function Python() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        {/* Left Column for the Image */}
        <div className="col-md-4 d-flex justify-content-center">
          <img src="uiux.png" alt="uiux logo" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </div>

        {/* Right Column for the Course Information */}
        <div className="col-md-8">
          <h3>UIUX</h3>
          <p>User experience design, abbreviated to UXD or UED, is the process of increasing customer satisfaction and loyalty by improving usability, ease of use, and enjoyment provided in the interaction between the customer and the product.</p>
          <p className="fw-bold">Course By: <Link to="/teacher3">Sai Krishna</Link></p>
          <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
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
            <Link to=""><img src="Ai.png" className="card-img-top" alt="" /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="">Menu</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to=""><img src="python.jpeg" className="card-img-top" alt="" /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="">Menu</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Python;