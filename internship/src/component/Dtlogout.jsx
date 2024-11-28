import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dtlogout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('teacherLoginStatus');
        navigate('/login');
    };
    // localStorage.removeItem('teacherLoginStatus')
    // window.location.href = '/login';
    return (
        <div>
            <div className='' style={{ textAlign: 'center' }}>
                <h1>LogOut</h1>
                <div><h3>Plese Confirm</h3>
                    <p>Are You Sure Want To Logout From My App</p>
                </div>
                <div className="">
                    <button type='button' onClick={handleLogout}>
                        Yes
                        </button><button type='button' onClick={() => navigate(-1)}
                            >No
                            </button>
                </div>
            </div>
        </div>
    )
}

export default Dtlogout