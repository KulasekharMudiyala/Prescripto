import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointment from './Appointment'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Doctors' element={<Doctors/>}/>
          <Route path='/Doctors/:Speciality' element={<Doctors/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/My-Profile' element={<Myprofile/>}/>
          <Route path='/My-Appointments' element={<Myappointments/>}/>
          <Route path='/Appointment/:docId' element={<Appointment/>}/>

        </Routes>
        <Footer/>
    </div>
  )
}

export default App