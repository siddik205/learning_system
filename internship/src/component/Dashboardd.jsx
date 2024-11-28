import React from 'react'
import { useEffect } from 'react'

function Dashboardd() {
  useEffect(()=>{
    document.title='Teacher Dashboard'
  })
  return (
    <div>
    <div class="dashboard">
    <aside class="sidebar">
        <ul>
        <h6> <li><a href="tmy"> Teacher DashBoard</a></li></h6>
            <li><a href="tmy">My Courses</a></li>
            <li><a href="tadd">Add Courses</a></li>
            <li><a href="tuse">User List</a></li>
            <li><a href="tprofile">Profile Setting</a></li>
            <li><a href="tchange">Change Password</a></li>
            <li><a href="teacherlogout" class="logout">Logout</a></li>
        </ul>
    </aside>
    <main class="content">
        <h2>My Courses</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Web Development</td>
                    <td><a href="#">Shaik Siddik</a></td>
                    <td><button class="delete-btn">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </main>
</div>
</div>

  )
}

export default Dashboardd