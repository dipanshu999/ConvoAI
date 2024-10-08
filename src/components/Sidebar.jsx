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
    <div className='bg-black fixed h-full w-[20vw] p-2  hidden tab:inline shadow-xl shadow-slate-500'>
      <div className='Logo w-full h-52 '>
        <p className='text-white'>Nav</p>
      </div>

      <div className="chat-history w-full mt-2 h-full overflow-y-auto">
        <button onClick={handleNewChat} className='text-white bg-blue-500 p-2 rounded mb-4'>New Chat</button>
        <button onClick={()=>navigate('/')} className='text-white bg-green-500 p-2 rounded mb-4'>Home</button>
        
        {chatHistory.map((chat) => (
          <div key={chat.id} className='w-full mb-2'>
            <button 
              className='text-white text-xl hover:bg-gray-700  block w-full text-left'
              onClick={() => handleChatClick(chat.id)}
            >
              { chat?.title && chat.title.split(' ').slice(0, 5).join(' ').replace(/^./, str => str.toUpperCase()) + (chat.title.split(' ').length >= 5 ? ' ...' : '') }
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}