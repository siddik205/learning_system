import React from 'react'
import { useEffect } from 'react'

function Five() {
    useEffect(()=>{
        document.title=''
      })
  return (
    <div>
         <div class="dashboard">
        <aside class="sidebar">
            <ul>
             <card className="title">Dashboard</card>
                <li><a href="one">My Courses</a></li>
                <li><a href="twoo">Favorite Courses</a></li>
                <li><a href="three">Recommended Courses</a></li>
                <li><a href="four">Profile Setting</a></li>
                <li><a href="five">Change Password</a></li>
                <li><a href="#" class="logout">Logout</a></li>
            </ul>
        </aside>
        <div className='table'>
            
                <h5 style={{textAlign:'center'}} className='bg-warning'>Change Password</h5 >
            
            <br /><br />
        
        <div className='form'style={{textAlign:'center'}}>
          
        Old Password<input type="text"className='form_input' /> 
            <label htmlFor="old password"></label>
            New Password <input type="text" />
            <label For="old password"className='form_label'></label>
            <br /><br /><br /><br />
            <input type="button" value="update"className='bg-primary' />
        </div>
    
    </div>
    </div>
    </div>
  )
}

export default Five