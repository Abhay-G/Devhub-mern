import React from 'react';

import './Card.scss';

const Card = ({ children, heading, icon }) => {
    return (
        <div className=' card_og container bg-white rounded-2xl p-8 text-center flex flex-col items-center '>
            {icon && <div className='text-purple-300 mb-2'>{icon}</div>}
            <h2 className='text-purple-300 mb-4'>{heading}</h2>
            {children}
        </div>
    );
};

export default Card;
