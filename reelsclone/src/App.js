import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';
import ForgetPassword from './Components/ForgetPassword.js';
import ResetPassword from './Components/ResetPassword.js';
import PageNotFound from './Components/PageNotFound.js';
import Profile from './Components/Profile.js';
import Navbar from './Components/Navbar.js';
import Feed from './Components/Feed.js';

function App() {
  return (
    <div>
      {/* Here Is Your App */}
      <Navbar></Navbar>
      <Routes>
         <Route path = '/login' element = {<Login></Login>}></Route>
         <Route path = '/signup' element = {<SignUp></SignUp>}></Route>
         <Route path = '/forgetpassword' element = {<ForgetPassword></ForgetPassword>}></Route>
         <Route path = '/resetpassword' element = {<ResetPassword></ResetPassword>}></Route>
         <Route path = '/feed' element = {<Feed></Feed>}></Route>
         <Route path = '/profile' element = {<Profile></Profile>}></Route>
         <Route path = '/' element = {<PageNotFound></PageNotFound>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
