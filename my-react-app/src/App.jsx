import React from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Details from "./pages/Details"
import LoginAdmin from "./pages/AdminLogin"
import RegisterAdmin from "./pages/AdminRegister"
import Admin from "./pages/Admin"
import Jobs from "./pages/Jobs"
import Events from "./pages/Events"
import Matches from "./pages/Matches"
import LandingPage from "./pages/LandingPage"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function RegisterAndLogoutAdmin() {
  localStorage.clear()
  return <RegisterAdmin />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegisterAndLogout />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/login/admin" element={<LoginAdmin />}/>
        <Route path="/register/admin" element={<RegisterAndLogoutAdmin />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/jobs" element={<Jobs />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/matches/:id" element={<Matches />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App