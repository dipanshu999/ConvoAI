import React from 'react'
import axios from 'axios'

export default function App() {

  async function GenerateAnswer(){
      console.log('Loading ...');

      const response= await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",

        method:"post",
        data:{
          "contents":[{"parts":[{"text":"Leo messi"}]}]
        }
      })

      console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }
  return (
    <div>
      <p>AI chat app</p>
      <button onClick={GenerateAnswer} className='bg-yellow-400 p-2'>Generate</button>
    </div>
  )
}
