import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [answer, setAnswer] = useState([]);   
  const [question, setQuestion] = useState([]);  
  const [Query, setQuery] = useState('');   
  const [Loading, setLoading] = useState(false);   


 
  async function GenerateAnswer(Query) {
    setQuestion((prev) => [...prev, Query]);

    try {
      setLoading(true)
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",
        method: "post",
        data: {
          "contents": [{ "parts": [{ "text": `${Query}` }] }]
        }
      });

      const data = response.data.candidates[0].content.parts[0].text;
      setAnswer((prev) => [...prev, data]);

    } catch (err) {
      setLoading(false)
      console.log("Error occurred", err);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  return (
    <div className=' flex'>
           
      <div className='bg-gray-700  h-screen w-[20vw] '>
        <p className='text-white'>Nav</p>
      </div>

    <div  className="form-response w-[80vw] h-screen">

      {/* Display questions and corresponding answers */}
      <div className="extra-div w-[80%] mx-auto">

      <div className='mt-4'>
        {question.map((item, index) => (
            <div key={index} className="mb-4">
              
              <div className='flex justify-end'>
                <div className='bg-blue-600 max-w-[30%] min-w-[10%] p-2 '>
                  <h1 className='text-white '>{item}</h1>
                </div>
              </div>

              {(answer[index] ?? !setLoading) ? (
                <ReactMarkdown className='text-black text-lg mb-4 w-[60%] bg-green-200'>
                  {answer[index]}
                </ReactMarkdown>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            ))
        
        }
      </div>

      <div className="form  bottom-6 fixed right-52 shadow-xl shadow-gray-300 border flex justify-between rounded-xl w-[50%] overflow-hidden bg-white">
            <input
                  type="text"
                  placeholder='Enter your query '
                  className='w-[90%] p-3 text-lg  focus:outline-none '
                  value={Query}
                  onChange={(e) => setQuery(e.target.value)}
                />

            <div className='w-14 h-14 '>
              <button onClick={() => GenerateAnswer(Query)} disabled={Loading} className={`bg-yellow-400 h-full p-2  ${Loading ? 'cursor-not-allowed':'null' }  rounded-full ` }>
                GOO
              </button>
            </div>
      </div>

      </div>
      </div>
      
    </div>
  );
}
