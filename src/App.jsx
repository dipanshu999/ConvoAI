import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [answer, setAnswer] = useState([]);   
  const [question, setQuestion] = useState([]);  
  const [Query, setQuery] = useState('');   
  const [Loading, setLoading] = useState(false);   


 
  async function GenerateAnswer(Query) {
    console.log('Loading ...');

    
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
    <div className='p-4'>
      <p>AI chat app</p>

      {/* Input form */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder='Enter your query'
          className='border'
          value={Query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={() => GenerateAnswer(Query)} disabled={Loading} className={`bg-yellow-400 p-2 ${Loading ? 'cursor-not-allowed':'null' }  ` }>
          Generate
        </button>
      </form>

      {/* Display questions and corresponding answers */}
      <div className='mt-4'>
        {question.map((item, index) => (
            <div key={index} className="mb-4">
              <h1 className='text-red-500'>{item}</h1>

              {(answer[index] ?? !setLoading) ? (
                <ReactMarkdown className='text-blue-500 text-lg mb-4'>
                  {answer[index]}
                </ReactMarkdown>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            ))
        
        }
      </div>
    </div>
  );
}
