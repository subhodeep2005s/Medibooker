import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import  Appointment  from './pages/Appointment'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
   <div className='mx-4 sm:mx-[10%]'>
    <NavBar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/doctors' element={<Doctors/>}/>
       <Route path='/doctors/:speciality' element={<Doctors/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/myprofile' element={<MyProfile/>}/>
       <Route path='/Myappointments' element={<MyAppointments/>}/>
       <Route path='/appointment/:docId' element={<Appointment/>}/>
       
      
    </Routes>
    <Footer/>

    
   </div>
  )
}

export default App