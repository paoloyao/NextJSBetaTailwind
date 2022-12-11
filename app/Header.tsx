import Link from 'next/link'
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'

function Header() {
  return (
    // <header className='p-5 bg-blue-500'>
    //   <Link href='/' className='px-2 py-1 text-blue-500 rounded-lg bg-white'>
    //     I am the Homepage
    //   </Link>
    // </header>
    <div className='flex'>
      <Sidebar />
    </div>
  )
}

export default Header