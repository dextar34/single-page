import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='text-6xl underline'>
Home is where the heart resides, and comfort is found. From cozy corners to lively living rooms, each space tells a story. The warmth of family gatherings, the serenity of a quiet evening, and the joy of shared meals create an inviting atmosphere. Memories are made, laughter echoes, and love flourishes. Every room, every nook, holds a piece of our lives, making home the most cherished place.</h1>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home
