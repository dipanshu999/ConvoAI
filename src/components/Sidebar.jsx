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
    <div className='bg-black fixed h-full w-[20vw]'>
      <div className='Logo w-full h-52 '>
        <p className='text-white'>Nav</p>
      </div>

      <div className="chat-history w-full mt-2 h-full overflow-y-auto">
        <button onClick={handleNewChat} className='text-white bg-blue-500 p-2 rounded mb-4'>New Chat</button>
        
        {chatHistory.map((chat) => (
          <div key={chat.id} className='w-full mb-2'>
            <button 
              className='text-white hover:bg-gray-700 p-2 block w-full text-left'
              onClick={() => handleChatClick(chat.id)}
            >
              {chat.title.charAt(0).toUpperCase() + chat.title.slice(1).split(' ').slice(0, 6).join(' ') + ' ...'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}