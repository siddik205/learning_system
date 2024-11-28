import React from 'react'
import { Link } from 'react-router-dom'


function Teacher1() {
    return (
        <div className="container mt-3">
            <div className="row align-items-center">
                {/* Left Column for the Image */}
                <div className="col-md-4 d-flex justify-content-center">
                    <img src="Python.jpeg" alt="Python logo" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </div>

                {/* Right Column for the Course Information */}
                <div className="col-md-8">
                    <h3>Saral Kumar</h3>
                    <p>A Python trainee is an individual in the early stages of learning Python, one of the most popular programming languages in the world. Python trainees often come from varied backgrounds,
                        including students, career-changers, or professionals looking to expand their technical skills. As a beginner, a Python trainee starts by understanding the basics of Python syntax, data types, and control structures.
                        They typically work on simple coding exercises that cover fundamental concepts such as variables, loops, conditional statements, and functions.</p>
                    <p className="fw-bold">Skills: <Link to="">Python,D Jango</Link></p>
                    <p className="fw-bold">Rating</p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Video 1 <button className="btn btn-sm btn-secondary float-end">Play</button>
                    </li>
                    <li className="list-group-item">
                        Video 2 <button className="btn btn-sm btn-secondary float-end">Play</button>
                    </li>
                    <li className="list-group-item">
                        Video 3 <button className="btn btn-sm btn-secondary float-end">Play</button>
                    </li>
                </ul>
            </div>
            </div>
        
    )
}

export default Teacher1