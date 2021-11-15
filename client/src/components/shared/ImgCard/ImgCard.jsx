import React from 'react';
import '../Card/Card.scss';
const ImgCard = () => {
    return (
        <div className='card_og container flex items-center justify-around bg-white rounded-2xl p-6  '>
            <div className='img_holder_og w-16 h-16 bg-orange-100 rounded-full'>
                <img
                    className=' p-1'
                    src='/images/boy.png
                '
                    alt=''
                />
            </div>
            <div>
                <h2 className='text-purple-300 '>Yo! Welcome to Devhub</h2>
                <p className='text-grey-300'>
                    Wishing you an awesome experience
                </p>
            </div>
        </div>
    );
};

export default ImgCard;
