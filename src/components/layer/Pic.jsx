import React from 'react'
import { Link } from 'react-router-dom'

const Pic = ({className,href,src,alt,onClick}) => {
  return (
    <div onClick={onClick}>
      <Link to={href}>
      <picture>
        <img src={src} alt={alt} className={`${className}`}  />
      </picture>
      </Link>
    </div>
  )
}

export default Pic
