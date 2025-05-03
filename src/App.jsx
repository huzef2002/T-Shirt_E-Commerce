// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Error from './pages/Error';
import ProfileDashboard from './component/ProfileDashboard';
import Collection from './pages/Collection';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/collection' element={<Collection />} />
        
        {/* All profile-related content handled inside this component */}
        <Route path='/profile' element={<ProfileDashboard />} />
        
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
