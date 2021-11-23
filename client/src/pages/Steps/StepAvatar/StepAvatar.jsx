import { useState, useEffect } from 'react';
import { Background, Card, ImgCard, Loader } from '../../../components';
import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from '../../../store/activateSice';
import { activate } from '../../../http';
import { setAuth } from '../../../store/authSlice';
const StepAvatar = () => {
    const { name, avatar } = useSelector((state) => state.activate);
    const dispatch = useDispatch();
    const [image, setImage] = useState('/images/girl.jpg');
    const [loading, setLoading] = useState(false);
    const [unmounted, setUnmounted] = useState(false);
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        };
    };
    const submit = async () => {
        setLoading(true);
        try {
            const { data } = await activate({ name, avatar });
            if (data.auth) {
                //check if component has unmounted
                if (!unmounted) {
                    dispatch(setAuth(data));
                }
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        return () => {
            setUnmounted(true);
        };
    }, []);
    if (loading) return <Loader message='Activation in Progress' />;
    return (
        <div className='relative'>
            <div className='mb-8'>
                <ImgCard
                    heading='Just few more steps'
                    subheading='Please fill all the asked information'
                />
            </div>
            <div>
                <Card heading={`What a nice name, ${name}!`}>
                    <p className='text-grey-300 text-lg leading-snug mb-4 '>
                        How's this photo?
                    </p>

                    <img className='img_og mb-4' src={image} alt='avatar' />
                    <div>
                        <input
                            onChange={captureImage}
                            className='hidden'
                            type='file'
                            id='avatarInput'
                        />
                        <label
                            htmlFor='avatarInput'
                            className='flex items-center text-purple-300 mb-2 cursor-pointer text-lg font-medium'
                        >
                            <span>Choose a different photo</span>
                            <BsArrowRightShort size='1.5rem' />
                        </label>
                    </div>

                    <button
                        className='gradient_og transition duration-200 ease-in-out flex items-center py-3 px-6 text-white rounded-xl mb-3 hover:opacity-80'
                        onClick={submit}
                    >
                        <span className='mr-2 text-lg font-semibold'>Next</span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                </Card>
            </div>
            <Background />
        </div>
    );
};

export default StepAvatar;
