import { useState } from 'react';
import { Background, Card, ImgCard, TextInput } from '../../../components';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GiWarlockEye } from 'react-icons/gi';
import { verifyOtp } from '../../../http';
import { setAuth } from '../../../store/authSlice';
import { Bounce, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
const StepOTP = () => {
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const { phone, hash } = useSelector((state) => state.auth.otp);
    const submitOtp = async () => {
        try {
            if (!otp) {
                return toast('🎃 Please enter your OTP!', {
                    transition: Bounce,
                    autoClose: 3000,
                    theme: 'dark',
                });
            }
            const { data } = await verifyOtp({ otp, phone, hash });
            console.log(data);
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='relative'>
            <div className='mb-8'>
                <ImgCard
                    heading='Yo! Welcome to Devhub'
                    subheading='  Wishing you an awesome experience'
                />
            </div>
            <div>
                <Card
                    heading='Enter the OTP'
                    icon={<GiWarlockEye size='2rem' />}
                >
                    <TextInput
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                        className='gradient_og transition duration-200 ease-in-out flex items-center py-4 px-8 text-white rounded-xl mb-3 hover:opacity-80'
                        onClick={submitOtp}
                    >
                        <span className='mr-4 text-base font-semibold uppercase'>
                            Verify
                        </span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                    <div className='px-10'>
                        <p className='text-grey-300 text-base leading-snug '>
                            By entering your number you are agreeing to our
                            Terms of Service and Privacy Policy
                        </p>
                    </div>
                </Card>
            </div>
            <Background />
        </div>
    );
};

export default StepOTP;
