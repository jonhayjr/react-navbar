import {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa';

import useToggler from '../../hooks/useToggler';

const Navbar = () => {
    const [show, handleClick] = useToggler(true);

  return (
    <>
        <div className='desktop-nav bg-black text-white p-7 flex justify-between items-center'>
            <h1 className='text-2xl m-0 cursor-pointer font-bold tracking-wide'><Link to='/'>Jon Hay</Link></h1>
            <nav className='hidden md:flex justify-between text-lg'>
                <Link to='/' className='mr-10 hover:underline'>Home</Link>
                <Link to='/about' className='mr-10 hover:underline'>About</Link>
                <Link to='/services' className='mr-10 hover:underline'>Service</Link>
                <Link to='/contact' className='hover:underline'>Contact</Link>
            </nav>
            <div className="mobile-hamburger md:hidden cursor-pointer z-10 hover:opacity-50" onClick={handleClick}>
                {show ? <FaBars size={25}/> : <FaTimes size={25}/>}
            </div>
        </div>
        {!show && <div className="mobile-menu bg-black text-white flex flex-col text-center text-3xl h-full absolute top-0 left-0 py-10 w-full -z-1">
            <Link to='/' className='mb-10 hover:opacity-50'>Home</Link>
            <hr className='w-2/3 mx-auto'/>
            <Link to='/about' className='my-10 hover:opacity-50'>About</Link>
            <hr className='w-2/3 mx-auto'/>
            <Link to='/projects' className='my-10 hover:opacity-50'>Projects</Link>
            <hr className='w-2/3 mx-auto'/>
            <Link to='/contact' className="mt-10 hover:opacity-50">Contact</Link>
        </div>}
    </>
  )
}

export default Navbar