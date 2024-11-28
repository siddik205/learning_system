import React from 'react'

function Tchange() {
  return (
    <div>
      <div class="dashboard">
        <aside class="sidebar">
          <ul>
            <h6> <li><a href="tmy">DashBoard</a></li></h6>
            <li><a href="/tmy">My Courses</a></li>
            <li><a href="/tadd">Add Cources</a></li>
            <li><a href="/tuse">My User</a></li>
            <li><a href="/tprofile">Profile Setting</a></li>
            <li><a href="/tchange">Change Password</a></li>
            <li><a href="#" class="logout">Logout</a></li>
          </ul>
        </aside>
        <div className='table'>

          <h5 style={{ textAlign: 'center' }} className='bg-warning'>Change Password</h5 >

          <br /><br />

          <div className='form' style={{ textAlign: 'center' }}>

            Old Password<input type="text" className='form_input' />
            <label htmlFor="old password"></label>
            New Password <input type="text" />
            <label For="old password" className='form_label'></label>
            <br /><br /><br /><br />
            <input type="button" value="update" className='bg-primary' />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Tchange