import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, TextInput } from '../../../../components';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GiCandlestickPhone } from 'react-icons/gi';

const Phone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <div>
            <Card
                heading='Enter your Phone No.'
                icon={<GiCandlestickPhone size='2rem' />}
            >
                <TextInput
                    value={phoneNumber}
                    // placeholder='XX-XXX-XX'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Link
                    className='gradient_og transition duration-200 ease-in-out flex items-center py-4 px-8 text-white rounded-xl mb-3 hover:opacity-80'
                    to='/autheticate'
                >
                    <span className='mr-4 text-base font-semibold uppercase'>
                        Send OTP
                    </span>
                    <BsArrowRightCircle size='1.5rem' />
                </Link>
                <div className='px-10'>
                    <p className='text-grey-300 text-base leading-snug '>
                        By entering your number you are agreeing to our Terms of
                        Service and Privacy Policy
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Phone;
