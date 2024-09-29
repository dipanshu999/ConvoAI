import React, { useContext } from 'react';

import ReactMarkdown from 'react-markdown';
import { ChatContext } from './utils/Context';


export default function App() {

  const {GenerateAnswer ,answer,Loading,question,Query,setQuery}=useContext(ChatContext)

  if(!answer){
    return <>Loading ...</>
  }

  return (
    <div className=' flex'>
           
      <div className=' bg-black  fixed   h-full w-[20vw] '>
        <p className='text-white'>Nav</p>
      </div>

    <div  className="form-response w-[80vw]  ml-[20vw] bg-gray-700 mb">

      {/* Display questions and corresponding answers */} 
      <div className="extra-div w-[70%] mx-auto shadow-xl shadow-white  rounded-xl mt-6 ">  {/* for setting width */}

      <div className='mt-8 mb10 min-h-screen w-full mx-auto text-lg mb-20 py-1 px-4'>
        {question.map((item, index) => (
            <div key={index} className="mb-4 ">
              
              <div className='flex justify-end mt-8'>
                <div className=' max-w-[50%] min-w-[10%] p-3 rounded-md  bg-gradient-to-r  from-[#12D8FA] to-[#A6FFCB]'>
                  <h1 className=' text-white'>{item}</h1>
                </div>
              </div>

              {(answer[index] ?? !Loading) ? (
                <ReactMarkdown className='text-white text-xl rounded-xl mt-8 p-3  mb-4 w-[85%] bg-gradient-to-tr from-[#FC488B] to-yellow-400'>
                  {answer[index].slice(0,500)}
                </ReactMarkdown>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            ))
        
        }
      </div>

      <div className="form  bottom-6 fixed right-52 shadow-xl shadow-gray-700 border flex justify-between items-center rounded-xl w-[50%] overflow-hidden bg-white">
            <input
                  type="text"
                  placeholder='Enter your query '
                  className='w-[90%] p-4 text-lg backdrop-blur-sm focus:outline-none '
                  value={Query}
                  onChange={(e) => setQuery(e.target.value)}
                />

            <div className='w-12 h-12 mx-auto mr-6'>
              <button onClick={() => GenerateAnswer(Query)} disabled={Loading} className={`bg-yellow-400 border-2 border-black h-full w-full flex items-center justify-center ${Loading ? 'cursor-not-allowed':'null' }  rounded-full ` }>
                <img src="../arrow.png" className='w-9 h-9' />
              </button>
            </div>
      </div>

      </div>
      </div>
      
    </div>
  );
}
