import React, { createContext,useState } from 'react';
import axios from 'axios';
// Create the context
const ChatContext = createContext();

  

export default function Context({ children }) {

  const [answer, setAnswer] = useState([]);   
  const [question, setQuestion] = useState([]);  
  const [Query, setQuery] = useState('');   
  const [Loading, setLoading] = useState(false);  

  async function GenerateAnswer(Query) {
    setQuestion((prev) => [...prev, Query]);

    try {
      setLoading(true)
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_ANFzW0lwaYaJKE_dnUnYu6vTPsjV7AU",
        method: "post",
        data: {
          "contents": [{ "parts": [{ "text": `${Query}`}] }]
        }
      });

      const data = response.data.candidates[0].content.parts[0].text;
      setAnswer((prev) => [...prev, data]);

    } catch (err) {
      setLoading(false)
      console.log("Error occurred", err);
    }finally{
      setLoading(false);
    }
  }


  return (
    <ChatContext.Provider value={{GenerateAnswer,answer,Loading,question,Query,setQuery}}>
      {children}
    </ChatContext.Provider>
  );
}

// Optional: Export the context for use in other components
  export { ChatContext };
