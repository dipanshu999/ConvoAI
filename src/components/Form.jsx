import React, { useContext, useState } from 'react';
import { ChatContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const { generateAnswer, loading, currentChatId } = useContext(ChatContext);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() && !loading) {
      const newChatId = await generateAnswer(query, currentChatId);
      if (newChatId && newChatId !== currentChatId) {
        navigate(`/chat/${newChatId}`);
      }
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form bottom-6 fixed right-52 shadow-xl shadow-gray-700 border flex justify-between items-center rounded-xl w-[50%] overflow-hidden bg-white">
      <input
        type="text"
        placeholder='Enter your query'
        className='w-[90%] p-4 text-lg backdrop-blur-sm focus:outline-none'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className='w-12 h-12 mx-auto mr-6'>
        <button
          type="submit"
          disabled={loading}
          className={`bg-yellow-400 border-2 border-black h-full w-full flex items-center justify-center ${loading ? 'cursor-not-allowed' : 'null'} rounded-full`}
        >
          <img src="../arrow.png" className='w-9 h-9' alt="Submit" />
        </button>
      </div>
    </form>
  );
}