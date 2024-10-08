import React, { useContext } from 'react'
import { ChatContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const { chatHistory, startNewChat, loadChat } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleChatClick = (chatId) => {
    loadChat(chatId)
    navigate(`/chat/${chatId}`)
  }

  const handleNewChat = () => {
    startNewChat()
    navigate('/chat')
  }

  return (
    <div className='bg-black fixed h-full w-[20vw] p-3  hidden tab:inline shadow-xl shadow-slate-500'>
      <div className='Logo w-full h-52 '>
        <p className='text-white'>Nav</p>
      </div>

        <hr />
      <div className="chat-history w-full mt-2 h-full overflow-y-auto">

        <div className="btn flex justify-between pr-14 px-4">
          <button onClick={handleNewChat} className='text-white bg-blue-500 p-2 rounded mb-4 text-lg'>New Chat</button>
          <button onClick={()=>navigate('/')} className=' bg-orange-500 w-12  p-2 rounded-full mb-4'><img src="../home.svg" alt="" /></button>
        </div>

        
        { chatHistory.length>0 ? (chatHistory.map((chat) => (
          <div key={chat.id} className='w-full mb-2 bg-slate-700 p-2  rounded-md hover:shadow-md h-12 overflow-hidden hover:scale-95 duration-200 hover:shadow-slate-400'>
            <button 
              className='text-white text-xl hover:bg-gray-700  block w-full text-left'
              onClick={() => handleChatClick(chat.id)}
            >
              { chat?.title && chat.title.split(' ').slice(0, 5).join(' ').replace(/^./, str => str.toUpperCase()) + (chat.title.split(' ').length >= 5 ? ' ...' : '') }
            </button>
          </div>
        ))) : <div className='bg-slate-700 py-24 mt-6 rounded-xl'> <p className='text-red-500 font-bold text-[1.7em] text-center'>!! No chat history</p> </div>}
      </div>
    </div>
  )
}