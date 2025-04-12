import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/*' element={<Error/>}></Route>
    </Routes>
  )
}

export default App
