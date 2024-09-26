import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

  const[answer,setAnswer]=useState([]);
  const[Query,setQuery]=useState([]);


  async function GenerateAnswer(Query){
      console.log('Loading ...');

      try{
      const response= await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",

        method:"post",
        data:{
          "contents":[{"parts":[{"text":`${Query}`}]}]
        }
      })
      
      const data=response['data']['candidates'][0]['content']['parts'][0]['text']
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
    <div>
      <p>AI chat app</p>

      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Enter your query' className='border' onChange={(e)=>setQuery(()=>e.target.value)}/>
        <button onClick={()=>GenerateAnswer(Query)} className='bg-yellow-400 p-2'>Generate</button>
      </form>
      {
        
          answer.map((item,index)=> (<> <p key={index} className='text-blue-500 text-lg'>{item}</p> <br /> <br /> </>))
         
      }
    </div>
  )
}
