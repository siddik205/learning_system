import React from 'react'

function Logout() {
  // localStorage.removeItem('teacherLoginStatus')
    
  // window.location.href='/login';

  return (
    <div className='' style={{textAlign:'center'}}>
        <h1>LogOut</h1>
        <div><h3>Plese Confirm</h3>
        <p>Are You Sure Want To Logout From My App</p>
        </div>
        <div className="">
            <button type='submitt'>Yes</button> <button type='submitt'>No</button>
            <br /><br /><br />
        </div>
       
        </div>
  )
}

export default Logout