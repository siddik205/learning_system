import React from 'react'

function Four() {
    return (
        <div>
            <div class="dashboard">
                <aside class="sidebar">
                    <ul>
                        <h6> <li><a href="tmy">DashBoard</a></li></h6>
                        <li><a href="one">My Courses</a></li>
                        <li><a href="twoo">Favorite Courses</a></li>
                        <li><a href="three">Recommended Courses</a></li>
                        <li><a href="four">Profile Setting</a></li>
                        <li><a href="five">Change Password</a></li>
                        <li><a href="#" class="logout">Logout</a></li>
                    </ul>
                </aside>
                      <div className='container'style={{justifyContent:'center'}}>
                   <div className='col-md-6'>
                    <div className="form" style={{ width: '100%', maxWidth: '800px' }}>
                        <div>
                            <h3 style={{ textAlign: 'center' }}>
                                <label htmlFor="exampleUsername" className="form-label">Profile Setting</label>
                            </h3>
                        </div>
                        <form style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="mb-3">
                                <label htmlFor="exampleUsername" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleUsername" />
                                <div id="usernameHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleEmail" className="form-label">Email</label>
                                <input type="Email" className="form-control" id="exampleEmail" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Profile Photo</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="examplePassword" className="form-label">Password</label>
                                <input type="Password" className="form-control" id="examplePassword" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInterests" className="form-label">Interests</label>
                                <input type="text" className="form-control" id="exampleInterests" />
                                <div id="Help" className="form-text"></div>
                            </div>

                            <button type="submit" className="btn btn-primary bg-info">Update</button>
                            <br /><br /><br />
                        </form>
                    </div>
                </div>
                </div>
                </div>
                </div>
          
        
    )
}

export default Four