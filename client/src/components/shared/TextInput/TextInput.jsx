import React from 'react';
const TextInput = (props) => {
    return (
        <div className='relative'>
            <input
                className='bg-grey-200 mb-6 py-2 px-4 text-blue-300 font-semibold text-lg tracking-wider text-center rounded-lg focus:outline-none'
                type='text'
                {...props}
            />
        </div>
    );
};

export default TextInput;
