import React, { useState, useContext } from 'react'
import ReactMarkdown from 'react-markdown';
import { ChatContext } from '../utils/Context';

export default function Response() {
  const { currentChat, loading } = useContext(ChatContext);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const truncateText = (text, index) => {
    const words = text.split(' ');
    if (words.length <= 100 || expandedIndexes.includes(index)) {
      return text;
    }
    return words.slice(0, 100).join(' ') + '...';
  };

  return (
    <div className='mt-8 min-h-screen w-full mx-auto text-lg mb-20 py-1 px-4'>

      {currentChat.map((item, index) => (
        
        <div key={index} className="mb-4">
          <div className='flex justify-end mt-8'>
            <div className='max-w-[50%] min-w-[10%] p-3 rounded-md bg-gradient-to-r from-[#12D8FA] to-[#A6FFCB]'>
              <h1 className='text-white'>{item.question}</h1>
            </div>
          </div>

          {item.answer ? (
            <div className="relative">
              <ReactMarkdown className='text-black text-xl rounded-xl mt-8 p-3 mb-4 w-[85%] bg-gradient-to-tr from-[#FC488B] to-yellow-400'>
                {truncateText(item.answer, index)}
              </ReactMarkdown>

              {item.answer.split(' ').length > 100 && (
                <button 
                  onClick={() => toggleExpand(index)}
                  className="underline font-bold absolute bottom-3 right-40 text-xl hover:underline focus:outline-none"
                >
                  {expandedIndexes.includes(index) ? '. . .Show less' : '...more'}
                </button>
              )}
            </div>
          ) : (
            <p className='text-white text-xl rounded-xl mt-8 p-3 mb-4 w-[20%] bg-gradient-to-tr from-[#FC488B] to-yellow-400'>Loading...</p>
          )}
        </div>
      ))}
      {loading && (
        <p className='text-white text-xl rounded-xl mt-8 p-3 mb-4 w-[20%] bg-gradient-to-tr from-[#FC488B] to-yellow-400'>Loading...</p>
      )}
    </div>
  )
}