import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import { ChatContext } from '../utils/Context';


export default function Response() {

  const {answer,Loading,question}=useContext(ChatContext);
  return (
    <>
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
    </>
  )
}
