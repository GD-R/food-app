import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ConfigureStore } from './components/AppState';
import Home from './components/Home';
import Login from './components/Login';
import Sign from './components/Sign';
import './components/FireBaseSetup'
import UserContext from './components/UserContext';
import Profile from './components/Profile';


function App() {
  return (
    <div >
      <Provider store={ConfigureStore()}>
        <UserContext>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Sign/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </UserContext>
      </Provider>
    </div>
  );
}

export default App;
