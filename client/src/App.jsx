import React from "react"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/signUp"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from "./dashboard/pages/Dashboard"
import Test from './dashboard/pages/Test'
import Visit from './dashboard/pages/Visit'
import Appointment from './dashboard/pages/Appointment'
import Medicalhistory from './dashboard/pages/Medicalhistory'
function App() {
  const isLogin = true;
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={isLogin?<Dashboard/>:<SignIn/>}/>
          <Route path="/medicalhistory" element={isLogin?<Medicalhistory/>:<SignIn/>}/>
          <Route path="/appointment" element={isLogin?<Appointment/>:<SignIn/>}/>
          <Route path="/visit" element={isLogin?<Visit/>:<SignIn/>}/>
          <Route path="/test" element={isLogin?<Test/>:<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
