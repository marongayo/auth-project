import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <nav className='bg-red-500'>this is the navebar</nav>
        {children}</div>
  )
}

export default Layout;
