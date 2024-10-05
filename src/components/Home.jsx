import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen'>
       <Link className='ml-[22em]' to={'/chat'} >CHat</Link>
    </div>
  )
}
