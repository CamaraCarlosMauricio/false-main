import React, { useState } from 'react'
import { BeakerIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <>
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
                {/* Logo */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <BeakerIcon className='w-7 h-7 text-blue-600'></BeakerIcon>
                    <span className='font-bold'>Incrive</span>
                </div>

                {/* Menu icon */}
                <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                    {
                        isOpen ? <XMarkIcon></XMarkIcon> : <Bars3BottomRightIcon></Bars3BottomRightIcon>
                    }
                </div>

                {/* LinkNav */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    <li className='font-semibold my-7 md:my-0 md:ml-8'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='font-semibold my-7 md:my-0 md:ml-8'>
                        <Link to='#'>Services</Link>
                    </li>
                    <li className='font-semibold my-7 md:my-0 md:ml-8'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='font-semibold my-7 md:my-0 md:ml-8'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Get Started</button>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar