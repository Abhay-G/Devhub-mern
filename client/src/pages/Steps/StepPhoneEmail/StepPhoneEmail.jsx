import React, { useState } from 'react';
import { Background, ImgCard } from '../../../components';
import { HiMail, HiPhone } from 'react-icons/hi';
import Email from './Email/Email';
import Phone from './Phone/Phone';
import './StepPhoneEmail.scss';
const phoneEmailMap = {
    phone: Phone,
    email: Email,
};
const StepPhoneEmail = ({ changeStep }) => {
    const [authChoice, setAuthChoice] = useState('phone');
    const AuthChoice = phoneEmailMap[authChoice];
    return (
        <div className='relative'>
            <div className='mb-6'>
                <ImgCard
                    heading='Yo! Welcome to Devhub'
                    subheading='  Wishing you an awesome experience'
                />
            </div>
            <div className='phone_email_og container'>
                <AuthChoice changeStep={changeStep} />
                <div className='flex mt-2'>
                    <button
                        className={`p-2 my-4 ml-2 rounded-lg text-white font-semibold ${
                            authChoice === 'phone'
                                ? 'bg-blue-300'
                                : 'bg-purple-200'
                        } `}
                        onClick={() => setAuthChoice('phone')}
                    >
                        <HiPhone size='1.5rem' />
                    </button>
                    <button
                        className={`p-2 my-4 ml-2 rounded-lg text-white font-semibold ${
                            authChoice === 'email'
                                ? 'bg-blue-300'
                                : 'bg-purple-200'
                        } `}
                        onClick={() => setAuthChoice('email')}
                    >
                        <HiMail size='1.5rem' />
                    </button>
                </div>
                <Background />
            </div>
        </div>
    );
};

export default StepPhoneEmail;
