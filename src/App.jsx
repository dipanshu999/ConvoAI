import React from 'react';
import Sidebar from './components/Sidebar';
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Home from './components/Home';

export default function App() {

 
  return (
    <div className=' flex'>
           
      <Sidebar/>
     
      <Routes>
        <Route path='/chat' element={<Chat/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </div>
  );
}
