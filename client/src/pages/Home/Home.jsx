import React from 'react';
import { Background, Card, ImgCard } from '../../components';
import './Home.scss';
import { Link } from 'react-router-dom';
import { GiBatwingEmblem } from 'react-icons/gi';
import { BsArrowRightCircle } from 'react-icons/bs';

const Home = () => {
    return (
        <div className='relative h-full'>
            <div className='mb-8'>
                <ImgCard
                    heading='Yo! Welcome to Devhub'
                    subheading='  Wishing you an awesome experience'
                />
            </div>
            <div>
                <Card
                    heading=' Follow the process and join the club'
                    icon={<GiBatwingEmblem size='2rem' />}
                >
                    <div className='px-10'>
                        <p className='text-grey-300 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sollicitudin est ipsum, pharetra congue
                            lacus vulputate lobortis.
                        </p>
                    </div>
                    <Link
                        className='gradient_og transition duration-200 ease-in-out flex items-center py-4 px-8 text-white rounded-xl mb-2 hover:opacity-80'
                        to='/authenticate'
                    >
                        <span className='mr-4 text-base font-semibold uppercase'>
                            Begin the process
                        </span>
                        <BsArrowRightCircle size='1.5rem' />
                    </Link>
                </Card>
            </div>
            {/*--------------------------absolute images for background-------------------------- */}
            <Background />
        </div>
    );
};

export default Home;
