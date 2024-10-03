import React from 'react'
import Response from './Response'
import Form from './Form'

export default function Chat() {
  return (
    <>
    <div  className="form-response w-[80vw]  ml-[20vw] bg-gray-700 mb">
      <div className="extra-div w-[70%] mx-auto shadow-xl shadow-white bg-slate-900  rounded-xl mt-6 ">  {/* for setting width */}
        <Response/>
        <Form/>
      </div>
    </div>

    </>
  )
}
