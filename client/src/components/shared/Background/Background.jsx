import React from 'react';
import './Background.scss';
const Background = () => {
    return (
        <>
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
            <img
                className='absolute cube_bg_og'
                src='/images/cube.png'
                alt=''
            />
        </>
    );
};

export default Background;
