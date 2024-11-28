import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Seeall1() {
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
            <br /><br />
            <h3 className="">Latest Courses<Link to="" class="float-end"></Link></h3>
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
            <div className="container">
                {/* Latest Courses */}
                <br /><br />
                <h3 className=""><Link to="" class="float-end"></Link></h3>
                <div className="row">
                    <div className="col">
                        <div className="card" onClick={() => handlerSubmit()}>
                            <Link to=""><img src="meachine.png" height={'200px'} className="card-img-top" alt="..." onClick={() => handlerSubmit()} /></Link>
                            <div className="card-body bg-warning">
                                <h5 className="card-title" onClick={() => handlerSubmit()}><Link href="python">Mechine Learning</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" onClick={() => Submit()}>
                            <Link to=""><img src="cyber.jpeg" height={'200px'} className="card-img-top" alt="..." /></Link>
                            <div className="card-body bg-warning">
                                <h5 className="card-title" onClick={() => Submit()} ><Link herf="java">Cybersecurity</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" onClick={() => lSubmit()}>
                            <Link to="#"><img src="block.jpeg" height={'200px'} className="card-img-top" alt="..." /></Link>
                            <div className="card-body bg-warning">
                                <h5 className="card-title" onClick={() => lSubmit()} ><Link href="uiux">Blockchain</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" onClick={() => kSubmit()}>
                            <Link to="#"><img src="project.jpeg" height={'200px'} className="card-img-top" alt="..." /></Link>
                            <div className="card-body bg-warning">
                                <h5 className="card-title" onClick={() => kSubmit()}><Link to="#">Project management</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
              <br /><br /><br />
            </div>
        </div>
    )
}

export default Seeall1