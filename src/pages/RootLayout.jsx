import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        nav
      <Outlet/>
        footer
    </div>
  )
}

export default RootLayout
