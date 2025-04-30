import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Error from './pages/Error';
import ProfileDashboard from './component/ProfileDashboard'; // Adjust path if needed

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<ProfileDashboard />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
