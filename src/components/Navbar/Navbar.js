import { Link } from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa';

import useToggler from '../../hooks/useToggler';

const Navbar = () => {
    const [show, handleClick] = useToggler(true);

  return (
    <>
        <div className='desktop-nav bg-black text-white p-7 flex justify-between items-center'>
            <h1 className='logo text-4xl m-0 cursor-pointer font-bold tracking-wide text-red-600'><Link to='/'>JH</Link></h1>
            <nav className='hidden md:flex justify-between text-2xl'>
                <Link to='/' className='mr-12 hover:underline hover:text-red-600'>Home</Link>
                <Link to='/about' className='mr-12 hover:underline hover:text-red-600'>About</Link>
                <Link to='/projects' className='mr-12 hover:underline hover:text-red-600'>Projects</Link>
                <Link to='/contact' className='hover:underline hover:text-red-600'>Contact</Link>
            </nav>
            <div className="mobile-hamburger md:hidden cursor-pointer z-10 hover:text-red-600" onClick={handleClick}>
                {show ? <FaBars size={25}/> : <FaTimes size={25}/>}
            </div>
        </div>
     
           {!show && <div className='mobile-menu bg-black text-white flex flex-col text-center text-3xl absolute top-0 left-0 py-10 w-full h-full'>
                <Link to='/' className='mb-10 hover:text-red-600'>Home</Link>
                <hr className='w-2/3 mx-auto'/>
                <Link to='/about' className='my-10 hover:text-red-600'>About</Link>
                <hr className='w-2/3 mx-auto'/>
                <Link to='/projects' className='my-10 hover:text-red-600'>Projects</Link>
                <hr className='w-2/3 mx-auto'/>
                <Link to='/contact' className="mt-10 hover:text-red-600">Contact</Link>
            </div>}
    </>
  )
}

export default Navbar