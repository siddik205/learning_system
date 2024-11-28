import React from 'react'
import { useEffect } from 'react'

function Signin() {
  useEffect(() => {
    document.title = 'User Signin'
  })
  return (
    <div className="container">
      <div className='form-container'>
        <table border={1}>
          <tr>
            <td>
              <h3>SignIn Form</h3>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" name='email' placeholder='correct Email' /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name='password' placeholder='password' /></td>
          </tr>
          <button type='submit'>Submit</button>
          <br /><br />
        </table> 
      </div>
      <br /><br />
    </div>
  )
}

export default Signin