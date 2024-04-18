import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Landing } from './Landing'
import { Roombooking } from './Roombooking'
export const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/Roombooking' element={<Roombooking/>}/>
    </Routes>
  )
}
