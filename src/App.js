import React from 'react';
import { useState, useEffect } from 'react';

import MainPage from './SideBar/MainPage'
import Register from './Auth/Register';
import Auth from './Auth/Auth';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';


function App() {

  const [token, setToken] = useState('');

  // to connect later
  const getToken = (userToken) => {
    setToken(userToken)
    console.log(userToken)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/task-manager/register" element={<Register/>} />
          <Route path="/task-manager/auth" element={<Auth/>} />
          <Route path="/task-manager/tasks" element={<MainPage/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
