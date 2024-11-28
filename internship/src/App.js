import React from 'react'
import Menu from './component/Menu';
import Home from './component/Home';
import Seeall1 from './component/Seeall1';
import Seeall2 from './component/Seeall2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Onlinelearning from './component/Olinelearning';
import Signin from './component/Signin';
import About from './component/About';
import Login from './component/Login';
import Register from './Register'
import Course from './component/Course';
import Signup from './component/Signup';
import Footer from './Footer';
import Dashboard from './component/Dashboard'
import Python from './component/Python '
import Java from './component/Java';
import Uiux from './component/Uiux';
import Ai from './component/Ai';
import One from './component/One';
import Twoo from './component/Twoo';
import Three from './component/Three';
import Four from './component/Four';
import Five from './component/Five';
import Dashboardd from './component/Dashboardd';
import Teacher1 from './component/Teacher1';
import Teacher2 from './component/Teacher2';
import Teacher3 from './component/Teacher3';
import Teacher4 from './component/Teacher4';
import Tmycourse from './component/Tmycourse';
import Taddcourse from './component/Taddcourse';
import Tchange from './component/Tchange';
import Tuse from './component/Tuse';
import Tprofile from './component/Tprofile';
import Logout from './component/Logout';
import Tlogout from './component/Tlogout';
import Teacherseeall from './component/Teacherseeall';
import Dtlogout from './component/Dtlogout';
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='onlinelearning' exact element={<Onlinelearning />}></Route>
        <Route path='home' exact element={<Home />}></Route>
        <Route path='seeall1' exact element={<Seeall1 />}></Route>
        <Route path='seeall2' exact element={<Seeall2 />}></Route>
        <Route path='course' exact element={<Course />}></Route>
        <Route path='signup' exact element={<Signup />}></Route>
        <Route path='signin' exact element={<Signin />}></Route>
        <Route path='login' exact element={<Login />}></Route>
        <Route path='register' exact element={<Register />}></Route>
        <Route path='about us' exact element={<About />}></Route>
        <Route path='about us' exact element={<About />}></Route>
        <Route path='dashboard' exact element={<Dashboard />}></Route>
        <Route path='python' exact element={<Python />}></Route>
        <Route path='java' exact element={<Java />}></Route>
        <Route path='uiux' exact element={<Uiux />}></Route>
        <Route path='ai' exact element={<Ai />}></Route>
        <Route path='one' exact element={<One />}></Route>
        <Route path='twoo' exact element={<Twoo />}></Route>
        <Route path='three' exact element={<Three />}></Route>
        <Route path='four' exact element={<Four />}></Route>
        <Route path='five' exact element={<Five />}></Route>
        <Route path='dashboardd' exact element={<Dashboardd />}></Route>
        <Route path='teacher1' exact element={<Teacher1 />}></Route>
        <Route path='teacher2' exact element={<Teacher2 />}></Route>
        <Route path='teacher3' exact element={<Teacher3 />}></Route>
        <Route path='teacher4' exact element={<Teacher4 />}></Route>
        <Route path='tmy' exact element={<Tmycourse />}></Route>
        <Route path='tadd' exact element={<Taddcourse />}></Route>
        <Route path='tchange' exact element={<Tchange />}></Route>
        <Route path='tuse' exact element={<Tuse />}></Route>
        <Route path='tprofile' exact element={<Tprofile />}></Route>
        <Route path='tlogout' exact element={<Tlogout/>}></Route>
        <Route path='logout' exact element={<Logout />}></Route>
        <Route path='tseeall' exact element={<Teacherseeall />}></Route>
        <Route path='teacherlogout' exact element={<Dtlogout />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;