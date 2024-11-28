import React from 'react'
import { Link } from 'react-router-dom'
function Seeall2() {
  return (
    <div>
         <h3 className=" mb-4 mt-5">Popular Courses<Link to="/seeall2" class="float-end">See All</Link></h3>
      <div className="row ">
        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="dm.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body bg-primarry">
              <h5 className="card-title"><Link to="#">Digital Marketing</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="gd.png" height={'250px'}  className="card-img-top" alt="..." /></Link>
            <div className="card-body bg-primarry">
              <h5 className="card-title"><Link to="#">Graphic Designing</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="cw.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body bg-primarry">
              <h5 className="card-title"><Link to="#">Content Writing</Link></h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="wd.jpeg"height={'250px'}  className="card-img-top" alt="..." /></Link>
            <div className="card-body bg-primarry">
              <h5 className="card-title"><Link to="#">Web Development</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seeall2