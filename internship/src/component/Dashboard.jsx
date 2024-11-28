import React from 'react'
import { useEffect } from 'react'

function Dashboard() {
  useEffect(()=>{
    document.title='User Dashboard'
  })
  return (
    //  <div>
    // 
    <div>
    <div class="dashboard md-3">
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

export default Dashboard