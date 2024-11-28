import React from 'react'

function Tuse() {
  return (
    <div>
    <div class="dashboard">
    <aside class="sidebar">
        <ul>
        <h6> <li><a href="tmy">DashBoard</a></li></h6>
            <li><a href="tmy">My Courses</a></li>
            <li><a href="tadd">Add Cources</a></li>
            <li><a href="tuse">My User</a></li>
            <li><a href="tprofile">Profile Setting</a></li>
            <li><a href="tchange">Change Password</a></li>
            <li><a href="#" class="logout">Logout</a></li>
        </ul>
    </aside>
    <main class="content">
                <h2>User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Enrolled Course</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jhon Doe</td>
                            <td><a href="#">php</a></td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </main>
    </div>
    </div>

  )
}

export default Tuse