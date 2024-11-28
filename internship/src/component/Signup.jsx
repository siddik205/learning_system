// import React from 'react'
// import { useEffect } from 'react';
// import '../App.css'; 
// function Signup() {
//     useEffect(()=>{
//         document.title='User Signup'
//       })
//     return (
//         <div className="container">
//             <div className='form-container'>
//                 <table border={1} >
//                     <tr className='bg-warning'>
//                         <td>
//                             <h3>Sign Up Form</h3>
//                         </td>
//                     </tr>

//                     <tr>
//                         <td>
//                             <form>
//                                 <table style={{ textAlign: "center" }}>
//                                     <tr>
//                                         <td>First Name</td>
//                                         <td><input type="text" name='name' placeholder='First Name' /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Last Name</td>
//                                         <td><input type="text" name='name' placeholder='Last Name' /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Email</td>
//                                         <td><input type="email" name='email' placeholder='correct Email' /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Password</td>
//                                         <td><input type="password" name='password' placeholder='password' /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Confirm Password</td>
//                                         <td><input type="password" name='password' placeholder='Confirm password' /></td>
//                                     </tr>
//                                     <tr style={{textAlign:'center'}}>
//                                         <td><input type="button" className='bg-secondary' value="submit" /></td>
//                                     </tr>
//                                 </table>
//                             </form>
//                         </td>
//                     </tr>
//                 </table>
//             </div >
//             <br /><br />
//         </div>

//     )
// }

// export default Signup

import React, { useEffect } from 'react';
import '../App.css'; 

function Signup() {
    useEffect(() => {
        document.title = 'User Signup';
    });

    return (
        <div className="container">
            <div className='form-container'>
                <table border={1}>
                    <tr className='bg-warning'>
                        <td>
                            <h3>Sign Up Form</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <form>
                                <table style={{ textAlign: "center" }}>
                                    <tr>
                                        <td>First Name</td>
                                        <td><input type="text" name='name' placeholder='First Name' /></td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td><input type="text" name='name' placeholder='Last Name' /></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><input type="email" name='email' placeholder='correct Email' /></td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input type="password" name='password' placeholder='password' /></td>
                                    </tr>
                                    <tr>
                                        <td>Confirm Password</td>
                                        <td><input type="password" name='password' placeholder='Confirm password' /></td>
                                    </tr>
                                   <button type='submit'>Submit</button>
                                </table> 
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <br /><br />
        </div>
    );
}

export default Signup;
