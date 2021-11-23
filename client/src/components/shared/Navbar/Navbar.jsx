import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../http';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state) => state.auth);
    const logoutUser = async () => {
        try {
            console.log('clicked');
            const { data } = await logout();
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <nav className='container flex justify-between items-center py-6'>
            <div>
                <h2 className='text-purple-300 font-semibold '>.devhub</h2>
            </div>

            <div className='flex items-center'>
                {!isAuth && (
                    <div className='transition duration-200 ease-in-out bg-blue-100 py-2 px-6 rounded-lg ml-8 hover:bg-blue-200'>
                        <Link className='text-blue-300 text-lg' to='/'>
                            .about
                        </Link>
                    </div>
                )}
                {!isAuth && (
                    <div className='transition duration-200 ease-in-out bg-blue-300 py-2 px-6 rounded-lg ml-8 hover:bg-blue-400'>
                        <Link className='text-white text-lg' to='/'>
                            .contact
                        </Link>
                    </div>
                )}
                {isAuth && user.avatar && (
                    <div className='ml-8 flex items-center  '>
                        <Link to='/'>
                            <img
                                className='w-11 h-11  rounded-full border-2 border-blue-300'
                                src={user.avatar}
                                alt='avatar'
                            />
                        </Link>
                    </div>
                )}
                {isAuth && (
                    <button
                        className='text-blue-300 text-lg ml-8 font-bold bg-blue-100 p-3 rounded-full hover:bg-blue-200'
                        onClick={logoutUser}
                    >
                        <AiOutlineLogout size='1.5rem' />
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
