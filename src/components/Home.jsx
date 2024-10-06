import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' border-green-400 border'>
       <Link className='ml-[22em]' to={'/chat'} >CHat</Link>
    </div>
  )
}
