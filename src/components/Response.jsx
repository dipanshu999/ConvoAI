import React, {useState, useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import { ChatContext } from '../utils/Context';


export default function Response() {

  const {answer,Loading,question}=useContext(ChatContext);
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track expanded answer

  const handleExpand = (index) => {
    setExpandedIndex(index); // Only expand, no collapse functionality
  };

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
                <div className="relative">

                    <ReactMarkdown className='text-white text-xl rounded-xl mt-8 p-3  mb-4 w-[85%] bg-gradient-to-tr from-[#FC488B] to-yellow-400'>
                      {answer[index].slice(0,500)+'...more'}
                    </ReactMarkdown>
{/* 
                    {answer[index].length > 500 && expandedIndex !== index && (
                      <button
                        onClick={() => handleExpand(index)}
                        className='text-blue-500 hover:underline'>
                        ...more
                      </button>
                    )} */}

                </div>
                
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
