import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
       <Link className='ml-[22em]' to={'/chat'} >CHat</Link>
    </div>
  )
}
