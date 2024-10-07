import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' border-green-400 border w-screen '>

      <div className="hello mx-auto w-[20rem] mt-6">
        <img src="../hello.gif" alt="" />
      </div>


    <p className='text-center text-3xl font-normal mt-12'> Hii, I am <b>Convo-AI</b> , your AI chatbot</p>
    <div className="link flex justify-center mt-6">
       <Link className='text-center bg-red-500 px-2 py-2 text-xl rounded-md text-white font-semibold' to={'/chat'} >Let's start !!</Link>
    </div>
    </div>
  )
}
