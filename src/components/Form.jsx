import React, { useContext } from 'react'
import { ChatContext } from '../utils/Context'

export default function Form() {
    const {GenerateAnswer ,Loading,Query,setQuery}=useContext(ChatContext)

  return (
    <>
      <div className="form  bottom-6 fixed right-52 shadow-xl shadow-gray-700 border flex justify-between items-center rounded-xl w-[50%] overflow-hidden bg-white">
            <input
                  type="text"
                  placeholder='Enter your query '
                  className='w-[90%] p-4 text-lg backdrop-blur-sm focus:outline-none '
                  value={Query}
                  onChange={(e) => setQuery(e.target.value)}
                />

            <div className='w-12 h-12 mx-auto mr-6'>
              <button onClick={() => GenerateAnswer(Query)} disabled={Loading} className={`bg-yellow-400 border-2 border-black h-full w-full flex items-center justify-center ${Loading ? 'cursor-not-allowed':'null' }  rounded-full ` }>
                <img src="../arrow.png" className='w-9 h-9' />
              </button>
            </div>
      </div>
    </>
  )
}
