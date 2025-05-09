import React from 'react'
import {assets} from '../assets/assets'
import {NavLink} from "react-router-dom"
const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-36' alt="" />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className={({ isActive }) =>`flex flex-col items-center gap-1 ${isActive ? 'active' : ''}`}>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className={({ isActive }) =>`flex flex-col items-center gap-1 ${isActive ? 'active' : ''}`}>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className={({ isActive }) =>`flex flex-col items-center gap-1 ${isActive ? 'active' : ''}`}>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) =>`flex flex-col items-center gap-1 ${isActive ? 'active' : ''}`}>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

        </ul>
        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar