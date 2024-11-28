import React,{ useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Course() {
  useEffect(()=>{
    document.title='Course'
  })
  const navigate = useNavigate();
  const handlerSubmit = () => {
    navigate('/python')

  }
  const Submit = () => {
    navigate('/Java')

  }
  const lSubmit = () => {
    navigate('/Uiux')

  }
  const kSubmit = () => {
    navigate('/ai')

  }
  return (
    <div>
      <div className="container">
        {/* Latest Courses */}
        <h3 className="">Courses<Link to="#" class="float-end"></Link></h3>
        <div className="row">
          <div className="col">
            <div className="card" onClick={() => handlerSubmit()}>
              <Link to=""><img src="python.jpeg" className="card-img-top" alt="..." onClick={() => handlerSubmit()} /></Link>
              <div className="card-body bg-info">
                <h5 className="card-title" onClick={() => handlerSubmit()}><Link href="python">Python</Link></h5>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => Submit()}>
              <Link to=""><img src="java.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-info">
                <h5 className="card-title" onClick={() => Submit()} ><Link herf="java">java</Link></h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => lSubmit()}>
              <Link to="#"><img src="uiux.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-info">
                <h5 className="card-title" onClick={() => lSubmit()} ><Link href="uiux">UIUX</Link></h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" onClick={() => kSubmit()}>
              <Link to="#"><img src="Ai.png" className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-info">
                <h5 className="card-title" onClick={() => kSubmit()}><Link to="#">AI</Link></h5>
              </div>
            </div>
          </div>
        </div>
        {/* End Latest Courses */}

        {/* Popular Courses */}
        <h3 className=" mb-4 mt-5"><Link to="#" class="float-end"></Link></h3>
        <div className="row ">
          <div className="col-md-3">
            <div className="card">
              <Link to="#"><img src="dm.png" height={'250px'} className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-warning">
                <h5 className="card-title"><Link to="#">Digital Marketing</Link></h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <Link to="#"><img src="gd.png" height={'250px'} className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-warning">
                <h5 className="card-title"><Link to="#">Graphic Designing</Link></h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <Link to="#"><img src="cw.png" height={'250px'} className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-warning">
                <h5 className="card-title"><Link to="#">Content Writing</Link></h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <Link to="#"><img src="wd.jpeg" height={'250px'} className="card-img-top" alt="..." /></Link>
              <div className="card-body bg-warning">
                <h5 className="card-title"><Link to="#">Web Development</Link></h5>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
      </div>
      <ul class="pagination" style={{justifyContent:'center'}}>
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item "><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
    </div>
    

  )
}

export default Course