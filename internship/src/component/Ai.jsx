import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

function Python() {
  useEffect(()=>{
    document.title='Artificial intelligence'
  })
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        {/* Left Column for the Image */}
        <div className="col-md-4 d-flex justify-content-center">
          <img src="Ai.png" alt="ai logo" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </div>

        {/* Right Column for the Course Information */}
        <div className="col-md-8">
          <h3>AI</h3>
          <p>Artificial intelligence, in its broadest sense, is the ability or attempt of an artificial system to simulate human intelligence through the optimization of mathematical functions.</p>
          <p className="fw-bold">Course By: <Link to="/teacher4">Sumanth Reddy</Link></p>
          <p className="fw-bold">Duration: 3 Hours 40 Minutes</p>
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
              <h5 className="card-title"><Link to="">Menu</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to=""><img src="java.png" className="card-img-top" alt="" /></Link>
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