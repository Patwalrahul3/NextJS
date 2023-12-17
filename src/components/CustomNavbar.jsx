"use client";

import Link from 'next/link';
import React from 'react'

const CustomNavbar = () => {
    return (
        <nav className='bg-blue-600  py-2 px-3 text-white  flex justify-between items-center'>

            <div className='brand'>
                <h1><a href="#!"> Work Manager </a></h1>
            </div>

            <div>
                <ul className='flex space-x-5'>
                    <li>
                        {/* <a href="/">Home</a>
                         */}
                        
                        <Link href={"/"} className='hover:text-blue-200'>Home</Link>
                    </li>
                    <li>
                        <Link href={"/add-task"} className='hover:text-blue-200'>Add Task</Link>
                    </li>
                    <li>
                        <Link href={"/show-task"} className='hover:text-blue-200'>Show Tasks</Link>
                    </li>
                </ul>
            </div>

            <div>
            <ul className='flex space-x-5'>
                    <li>
                    <Link href={"/login"} className='hover:text-blue-200'>Login</Link>
                
                    </li>
                
                    <li>
                        <Link href={"/signup"} className='hover:text-blue-200'>Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default CustomNavbar