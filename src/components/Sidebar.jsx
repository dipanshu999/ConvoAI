import React, { useContext } from 'react'
import { ChatContext } from '../utils/Context'

export default function Sidebar() {

  const{question}=useContext(ChatContext)

  return (
    <div className=' bg-black  fixed   h-full w-[20vw]'>

      <div className='Logo w-full h-52 border'>
        <p className='text-white'>Nav</p>
      </div>

      <div className="chat-history w-full border mt-2 h-full">
        <p className='text-white'>Chat history</p>

        {
          question.map((item,index)=><div className='w-full'><h1 key={index} className='text-white '>{item.split(' ').slice(0,6).join(' ')+' ...'}</h1></div> )
        }

      </div>

    </div>
  )
}
