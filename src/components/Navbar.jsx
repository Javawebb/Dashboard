import React from 'react'
import photo from "./profile.png"
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='h-screen p-10 w-2/12  bg-slate-800  '>
            <img src={photo} alt="" />
            <h1 className='heading font-semibold text-2xl mt-10 text-white'>Samantha</h1>
            <p className='mb-32 text-base text-gray-500'>samantha@gmail.com</p>
        <ul className='flex flex-col gap-10 font-semibold'>
            <li className=''>
                <NavLink
                 to={"/"}>
                Dashboard
                </NavLink>
            </li>
            <li className=''>
                <NavLink
                 to={"/expenses"}>
                Expenses
                </NavLink>
            </li>
            <li className=''>
                <NavLink
                 to={"/"}>
                Wallets
                </NavLink>
            </li>
            <li className=''>
                <NavLink
                 to={"/"}>
                     Summary
                </NavLink>
            </li>
            <li className=''>
                <NavLink
                 to={"/"}>
                     Accounts
                </NavLink>
            </li>
            <li className=''>
                <NavLink
                 to={"/"}>
                     Settings
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
