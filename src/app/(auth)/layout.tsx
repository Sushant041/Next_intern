import React from 'react'

const Layout = ({ children, } : { children: React.ReactNode }) => {
  return (
      <main className='h-screen flex content-center justify-center flex-wrap'>
        {children}
      </main>
  )
}

export default Layout