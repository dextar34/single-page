import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='text-6xl underline'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eveniet aspernatur vero facilis! Reprehenderit, laboriosam itaque repellendus enim quod, atque ab sit ea dolore id porro? Nisi, dolor recusandae? Enim!</h1>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home
