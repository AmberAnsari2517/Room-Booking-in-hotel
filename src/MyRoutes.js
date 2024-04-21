import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Landing } from './Landing'
import { Roombooking } from './Roombooking'
import { Aboutus } from './Aboutus'
import { Contect } from './Contect'
export const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/Roombooking' element={<Roombooking/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contect' element={<Contect/>}/>

    </Routes>
  )
}
