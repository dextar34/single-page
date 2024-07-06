import React from 'react'
import { Link } from 'react-router-dom'

const List = ({className,href,item}) => {
  return (
    <div className={`${className}`}>
      <Link to={href}>
        <li>{item}</li>
      </Link>
    </div>
  )
}

export default List
