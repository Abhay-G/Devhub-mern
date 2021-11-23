import { useState } from 'react';
import { Card, TextInput } from '../../../../components';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GiCandlestickPhone } from 'react-icons/gi';
import { Bounce, toast } from 'react-toastify';
import { sendOtp } from '../../../../http';
import { setOtp } from '../../../../store/authSlice';
import { useDispatch } from 'react-redux';
const Phone = ({ changeStep }) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const dispatch = useDispatch();
    const submitNumber = async () => {
        //server request
        if (!phoneNumber) {
            return toast('🎃 Please enter your number!', {
                transition: Bounce,
                autoClose: 3000,
            });
        }
        if (phoneNumber.length !== 12) {
            return toast(
                'Length should be equal to 12 including 91(India code)😶!',
                {
                    transition: Bounce,
                    autoClose: 5000,
                    theme: 'dark',
                }
            );
        }
        const { data } = await sendOtp({ phone: phoneNumber });
        console.log(data);
        dispatch(
            setOtp({
                phone: data.phone,
                hash: data.hash,
            })
        );
        changeStep();
    };

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

                <button
                    className='gradient_og transition duration-200 ease-in-out flex items-center py-4 px-8 text-white rounded-xl mb-3 hover:opacity-80'
                    onClick={submitNumber}
                >
                    <span className='mr-4 text-base font-semibold uppercase'>
                        Send OTP
                    </span>
                    <BsArrowRightCircle size='1.5rem' />
                </button>
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
