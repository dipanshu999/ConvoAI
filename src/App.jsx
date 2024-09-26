import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';

export default function App() {

  const[answer,setAnswer]=useState([]);
  const[question,setQuestion]=useState([]);
  const[Query,setQuery]=useState('');


  async function GenerateAnswer(Query){
      console.log('Loading ...');
      setQuestion((prev)=>[...prev,Query])

      try{
          const response= await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",
          
            method:"post",
            data:{
              "contents":[{"parts":[{"text":`${Query}`}]}]
            }
          })

          const data=response.data.candidates[0].content.parts[0].text;
          setAnswer((prev)=>[...prev,data])
      }

    catch(err){
      return <div>Some error occured...</div>
    }
  }

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  return (
    <div className='p-4'>
      <p>AI chat app</p>

      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Enter your query' className='border' value={Query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={()=>GenerateAnswer(Query)} className='bg-yellow-400 p-2'>Generate</button>
      </form>

        {
             question.map((item, index) => (
               <h1 className='text-red-500' key={index}>{item}</h1>
             ))
        }

        {
            answer.map((item, index) => (
              <ReactMarkdown key={index} className='text-blue-500 text-lg mb-4'>
                {item}
              </ReactMarkdown>
            ))
        }

    </div>
  )
}
