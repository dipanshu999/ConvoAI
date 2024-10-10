import React, { useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChatContext } from '../utils/Context'
import Response from './Response'
import Form from './Form'

export default function Chat() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { loadChat, currentChatId, chatHistory } = useContext(ChatContext)

  useEffect(() => {
    if (id && id !== currentChatId) {
      if (chatHistory.some(chat => chat.id === id)) {
        loadChat(id)
      } else {
        navigate('/chat')
      }
    }
  }, [id, loadChat, currentChatId, chatHistory, navigate])

  return (
    <div className="form-response  lap:w-[80vw] ml-[20vw] bg-gray-700 ">
      <div className="chat-Area tab:w-[90%]  lap:w-[70%] mx-auto shadow-xl shadow-white bg-slate-950 rounded-xl  ">
        <Response/>
        <Form/>
      </div>
    </div>
  )
}