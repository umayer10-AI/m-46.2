import React from 'react';
import NavLink from './NavLink';
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[80%] mx-auto py-4'>
            <div>

            </div>

            <NavLink></NavLink>
            
            <div className='flex items-center gap-3 justify-end'>
                <h2 className='text-4xl'><FaCircleUser /></h2>
                <button className='btn bg-black text-white px-7'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;