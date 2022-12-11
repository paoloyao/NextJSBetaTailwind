import React from 'react'
import { FaHome } from 'react-icons/fa';
import { RiTodoFill } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import Link from 'next/link'

const SideBarIcon = ({ icon, tooltipText, toLink }: { icon: JSX.Element, tooltipText: string, toLink: string }) => (
  <Link href={toLink} className='sidebar-icon group'>
    { icon }
    <span className='sidebar-tooltip group-hover:scale-100 md:hidden xs:hidden sm:hidden lg:inline xl:inline'>
      { tooltipText }
    </span>
  </Link>
);

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-100 
    dark:text-gray-900 shadow-lg bg-gray-900 text-white pt-3'>
      <SideBarIcon toLink='/' icon={<FaHome size='28' />} tooltipText='Homepage' />
      <SideBarIcon toLink='/todos' icon={<RiTodoFill size='28' />} tooltipText='Todos List' />
      <SideBarIcon toLink='/search' icon={<BiSearchAlt2 size='20' />} tooltipText='Search' />
    </div>
  )
}

export default Sidebar