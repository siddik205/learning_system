import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect,useState} from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';
function Teacherseeall() {
    const [teachers,setTeacher]=useState(null);
    useEffect(()=>{
      axios.get(baseUrl+'/teachers/').then((response)=>{
       // console.log(response.data);
       setTeacher(response.data);
      });
      
    },[]);
    console.log(teachers);
  
  return (
    <div><h3 className="pb-1 mb-4">Featured Teachers<Link to="#" class="float-end"></Link></h3>
    <div className="row mb-4">
      <div className="col-md-3">
        <div className="card">
          <Link to="/teacher1"><img src="teacher1.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacher1">Teacher Name</Link></h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <Link to="/teacher2"><img src="teacher2.jpeg" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacher2">Teacher Name</Link></h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <Link to="/teacher3"><img src="teacher3.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacher3">Teacher Name</Link></h5>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <Link to="/teacher4"><img src="teacher4.png" height={'285px'} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacher4">Teacher Name</Link></h5>
          </div>
        </div>
      
      </div>
    </div></div>
  )
}

export default Teacherseeall;