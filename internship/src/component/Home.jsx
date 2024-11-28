import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = 'Home'
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

    <div className="container">
      {/* Latest Courses */}
      <h3 className="">Latest Courses<Link to="/seeall1" class="float-end">See All</Link></h3>
      <div className="row">
        <div className="col">
          <div className="card" onClick={() => handlerSubmit()}>
            <Link to=""><img src="python.jpeg" height={'250px'} className="card-img-top" alt="..." onClick={() => handlerSubmit()} /></Link>
            <div className="card-body ">
              <h5 className="card-title" onClick={() => handlerSubmit()}><Link href="python">Python</Link></h5>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" onClick={() => Submit()}>
            <Link to=""><img src="java.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title" onClick={() => Submit()} ><Link herf="java">java</Link></h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" onClick={() => lSubmit()}>
            <Link to="#"><img src="uiux.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title" onClick={() => lSubmit()} ><Link href="uiux">UIUX</Link></h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" onClick={() => kSubmit()}>
            <Link to="#"><img src="Ai.png" className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title" onClick={() => kSubmit()}><Link to="#">AI</Link></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End Latest Courses */}

      {/* Popular Courses */}
      <h3 className=" mb-4 mt-4">Popular Courses<Link to="/seeall2" class="float-end">See All</Link></h3>
      <div className="row ">
        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="dm.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title"><Link to="#">Digital Marketing</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="gd.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title"><Link to="#">Graphic Designing</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="cw.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title"><Link to="#">Content Writing</Link></h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <Link to="#"><img src="wd.jpeg" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body ">
              <h5 className="card-title"><Link to="#">Web Development</Link></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}

      {/* Featured Teachers */}
      <h3 className="pb-1 mb-4">Featured Teachers<Link to="/tseeall" class="float-end">See All</Link></h3>
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
            <Link to="/teacher4"><img src="teacher4.png" height={'250px'} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher4">Teacher Name</Link></h5>
            </div>
          </div>
        </div>
        {/*         
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="active" aria-current="true"aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="active" aria-current="true"aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000" >
              <img src="test2.png" alt="" style={{height:'300px', backgroundColor:'black' }}/>
                <div class="carousel-caption d-none d-md-block">
                <p className="text-light">Some representative placeholder content for the first slide.</p>
                  <h5  className="text-light">First slide label</h5>
                  
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="test1.png" alt="" style={{ height:'300px', backgroundColor:'black'}}/>
                <div class="carousel-caption d-none d-md-block">
                <p className="text-light">Some representative placeholder content for the second slide.</p>
                  <h5  className="text-light">Second slide label</h5>
                  
                </div>
            </div>
            <div class="carousel-item">
              <img src="test3.png" alt="" style={{height:'300px', backgroundColor:'black'}}/>
                <div class="carousel-caption d-none d-md-block">
                <p className="text-light">Some representative placeholder content for the third slide.</p>
                  <h5  className="text-light">Third slide label</h5>
                  
                </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card mb-3" style={{maxwidth:'550px',backgroundColor:'black'}}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="test3.png" class="rounded-circle" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-light">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text rounded-circle"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card mb-3" style={{maxwidth:'550px',backgroundColor:'black'}}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="test1.png" class=" rounded-circle" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-light">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text rounded-circle"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card mb-3 " style={{maxwidth:'550px',backgroundColor:'black'}}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="test2.png" class="rounded-circle" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-light">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text rounded-circle"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>

  );
}

export default Home;