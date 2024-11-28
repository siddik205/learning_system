import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function Login() {
    const [teacherLoginData, setteacherLoginData] = useState({
        email: '',
        password: ''
    });

    const handelChange = (event) => {
        setteacherLoginData({
            ...teacherLoginData,
            [event.target.name]: event.target.value
        });
    };
    const submitForm = () => {
        // console.log(teacherLoginData);
        const teacherFormData = new FormData();
        teacherFormData.append('email', teacherLoginData.email)
        teacherFormData.append('password', teacherLoginData.password)
        try {
            axios.post(baseUrl + '/login', teacherFormData).then((res) => {
                //console.log(res.data);
                if (res.data.bool === true) {
                    localStorage.setItem('teacherLoginStatus', true);
                    window.location.href = '/dashboardd';

                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus === 'true') {
        window.location.href = '/dashboardd';
    }

    useEffect(() => {
        document.title = 'Teacher Login'
    })
    return (
        <div className='form p'>

            <div className='container' style={{ width: '100%', maxWidth: '500px' }}>
                <br /><br /><br />
                <div className="mb-3 bg-primary">

                    <h3>
                        <label htmlFor="exampleUsername" className="form-label">Teacher Login</label>
                    </h3>
                </div>
                

                    <div className="mb-3">
                        <h6>
                            <label htmlFor="exampleUsername" className="form-label">Username</label>
                        </h6>
                        <input type="email"value={teacherLoginData.email} name='email' onChange={handelChange} className="form-control" id="exampleUsername" />
                        <div id="usernameHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <h6>
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        </h6>
                        <input type="password" value={teacherLoginData.password} name='password'  onChange={handelChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <h6>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </h6>
                    </div>
                    <button type="submit"onClick={submitForm}>Submit</button>
                
                <br /><br /><br />
            </div>

        </div>

    );
}

export default Login;
