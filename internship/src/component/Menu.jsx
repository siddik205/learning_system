import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Menu() {
  useEffect(()=>{
    document.title='LMS Project'
  })
  return (
    
    <nav className="navbar navbar-expand-lg bg-info" style={{ paddingRight: '90px' }}>
  <div className="container">
    <Link className="navbar-brand" to="home">online learning</Link>
    <nav className="navbar navbar-expand-sm justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item justify-content-end">
          <Link className="nav-link" to="course">Courses</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teacher
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="login">Login</Link></li>
            <li><Link className="dropdown-item" to="register">Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="dashboardd">DashBoard</Link></li>
            <li><Link className="dropdown-item" to="tlogout">Logout</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about us">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="signup">Sign Up</Link></li>
            <li><Link className="dropdown-item" to="signin">Signin</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="dashboard">Dashboard</Link></li>
            <li><Link className="dropdown-item" to="logout">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</nav>


  );
}

export default Menu;
