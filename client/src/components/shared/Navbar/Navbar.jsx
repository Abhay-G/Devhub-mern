import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='container flex justify-between items-center py-6'>
            <div>
                <h2 className='text-purple-300 font-semibold '>.devhub</h2>
            </div>
            <div className='flex items-center'>
                <div className='transition duration-200 ease-in-out bg-blue-100 py-2 px-6 rounded-lg ml-8 hover:bg-blue-200'>
                    <Link className='text-blue-300 text-lg' to='/'>
                        .about
                    </Link>
                </div>
                <div className='transition duration-200 ease-in-out bg-blue-300 py-2 px-6 rounded-lg ml-8 hover:bg-blue-400'>
                    <Link className='text-white text-lg' to='/'>
                        .contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
