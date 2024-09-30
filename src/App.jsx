import React, { useContext } from 'react';


import { ChatContext } from './utils/Context';
import Sidebar from './components/Sidebar';
import Response from './components/Response';
import Form from './components/Form';


export default function App() {

 
  return (
    <div className=' flex'>
           
      <Sidebar/>

    <div  className="form-response w-[80vw]  ml-[20vw] bg-gray-700 mb">
      <div className="extra-div w-[70%] mx-auto shadow-xl shadow-white  rounded-xl mt-6 ">  {/* for setting width */}
        <Response/>
        <Form/>
      </div>
      </div>
      
    </div>
  );
}
