/*
*
* DEPENDENCIES:
*   Web page Surfing:
*       npm install react-router-dom
*
*   Firebase:
*       npm install firebase
*       npm install react-firebase-hooks
*       npm install -g firebase-tools
*   FORM:
*       npm install react-hook-form yup @hookform/resolvers
*
*/

/*
*
*   Importing Webpages/Components/Dependencies
*
*/

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LandingPage } from './pages/webpages/LandingPage/LandingPage';
import { UserHome } from './pages/user-interface/UserHome';
import { DriverHome } from './pages/driver-interface/DriverHome';
import { MerchantHome } from './pages/merchant-interface/MerchantHome';
import { ErrorOccured as ErrorPage } from './pages/webpages/ErrorOccured';
import { Login as LoginPage } from './pages/webpages/LoginPage/Login';
import { Signup as SignupPage } from './pages/webpages/SignupPage/Signup';
import { ResponsiveTest as TestComponent } from './pages/testPages/ResponsiveTest';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          { /* Tabbage Owner Interfaces for Testing */}
          <Route path = "/testStylingComponent" element = {<TestComponent />}/>
          
          { /* USER INTERFACES */  }
          <Route path = "/" element = {<LandingPage />}/>
          <Route path = "/User-Main-Page" element = {<UserHome />}/>
          <Route path = "/Login" element = {<LoginPage />}/>
          <Route path = "/Signup" element = {<SignupPage />}/>
          
          { /* DRIVER INTERFACES */  }
          <Route path = "/" element = {<LandingPage />}/>
          <Route path = "/Driver-Main-Page" element = {<DriverHome />}/>

          { /* MERCHANT INTERFACES */  }
          <Route path = "/" element = {<LandingPage />}/>
          <Route path = "/Merchant-Main-Page" element = {<MerchantHome />}/>
          
          { /* Error Page */  }
          <Route path = "*" element = {<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
