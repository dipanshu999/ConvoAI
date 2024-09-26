import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

  const[answer,setAnswer]=useState([])

  async function GenerateAnswer(){
      console.log('Loading ...');

      try{
      const response= await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",

        method:"post",
        data:{
          "contents":[{"parts":[{"text":"tienen se acabe"}]}]
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
      <button onClick={GenerateAnswer} className='bg-yellow-400 p-2'>Generate</button>
      
      {/* <p className='text-blue-500 text-lg'>{answer}</p> */}
    </div>
  )
}
