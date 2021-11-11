import React from 'react';
import { Card, ImgCard } from '../../components';
import './Home.scss';
import { Link } from 'react-router-dom';
import { GiBatwingEmblem } from 'react-icons/gi';
import { BsArrowRightCircle } from 'react-icons/bs';
const Home = () => {
    return (
        <div className='relative home_og'>
            <div className='mb-8'>
                <ImgCard />
            </div>
            <div>
                <Card
                    heading=' Follow the process and join the club'
                    icon={<GiBatwingEmblem size='2rem' />}
                >
                    <div className='px-10'>
                        <p className='text-grey-200 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sollicitudin est ipsum, pharetra congue
                            lacus vulputate lobortis.
                        </p>
                    </div>
                    <Link
                        className='gradient_og transition duration-200 ease-in-out flex items-center py-4 px-8 text-white rounded-2xl mb-2 hover:opacity-80'
                        to='/register'
                    >
                        <span className='mr-4 text-base font-semibold'>
                            Get your username
                        </span>
                        <BsArrowRightCircle size='1.5rem' />
                    </Link>
                    <Link
                        className='text-blue-400 hover:text-blue-500'
                        to='/login'
                    >
                        Already have an account?{' '}
                        <span className='font-semibold'>Sign In</span>
                    </Link>
                </Card>
            </div>
            {/*--------------------------absolute images for background-------------------------- */}
            <img
                className='absolute blob_blue_og'
                src='/images/blob-blue.png'
                alt=''
            />
            <img
                className='absolute blob_purple_og'
                src='/images/blob-purple.png'
                alt=''
            />
            <img
                className='absolute rocket_og'
                src='/images/rocket.png'
                alt=''
            />
            <img className='absolute cube_og' src='/images/cube.png' alt='' />
        </div>
    );
};

export default Home;
