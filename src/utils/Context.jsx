import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

const ChatContext = createContext();

export default function Context({ children }) {
  const [chats, setChats] = useState({});
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateAnswer = useCallback(async (query, chatId = null) => {
    setLoading(true);
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",
        method: "post",
        data: {
          "contents": [{ "parts": [{ "text": query }] }]
        }
      });

      const answer = response.data.candidates[0].content.parts[0].text;
      
      if (!chatId) {
        chatId = nanoid();
        setChatHistory(prev => [...prev, { id: chatId, title: query }]);
      }
      
      setChats(prev => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), { question: query, answer }]
      }));
      
      setCurrentChatId(chatId);
      return chatId;
    } catch (err) {
      console.error("Error occurred", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const startNewChat = useCallback(() => {
    setCurrentChatId(null);
  }, []);

  const loadChat = useCallback((chatId) => {
    if (chats[chatId]) {
      setCurrentChatId(chatId);
    } else {
      console.error(`Chat with ID ${chatId} not found`);
    }
  }, [chats]);

  return (
    <ChatContext.Provider value={{
      generateAnswer,
      loading,
      chatHistory,
      currentChatId,
      startNewChat,
      loadChat,
      currentChat: chats[currentChatId] || []
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext };