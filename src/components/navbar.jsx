import React from 'react';
import { useState } from 'react';
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx"
import { Menu, X } from "lucide-react";


const Navbar = () => {
    const [mdo, setmdo] = useState(false);
    const toggle = () => {
        setmdo(!mdo);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 border-b backdrop:blur-lg border-neutral-700/80">
            <div className="container relative px-4 mx-auto text-sm">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo" className='mr-2 size-10' />
                        <span className='text-xl font-bold tracking-tight'>VirtualR</span>
                    </div>
                    <ul className='items-center hidden ml-12 space-x-12 lg:flex'>
                        {navItems.map((me, index) => (
                            <li key={index} >
                                <a href={me.href}>{me.label}</a>
                            </li>
                        ))}

                    </ul>
                    <div className="items-center justify-center hidden space-x-12 lg:flex">
                        <a href="#" className='px-3 py-2 border rounded'> Sign In</a>
                        <a href="#" className='px-3 py-2 border rounded bg-gradient-to-r from-orange-500 to-orange-800'> create an account </a>
                    </div>
                    <div className='flex items-center justify-end lg:hidden' onClick={toggle}>
                        {mdo ? <X /> : <Menu />}

                    </div>


                </div>
                {mdo && <div className='fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 border-b bg-neutral-900 border-neutral-700/80 lg:hidden'><ul className='flex flex-col items-center justify-center '>
                    {navItems.map((me, index) => (
                        <li key={index} className='py-4'>
                            <a href={me.href}>{me.label}</a>
                        </li>

                    ))}
                </ul>
                    <div className='flex items-center justify-center space-x-4'>
                        <a href="#" className='px-3 py-2 border rounded'> Sign In</a>
                        <a href="#" className='px-3 py-2 border rounded bg-gradient-to-r from-orange-500 to-orange-800'> create an account </a>


                    </div>
                </div>




                }


            </div>


        </nav>
    )
}

export default Navbar
