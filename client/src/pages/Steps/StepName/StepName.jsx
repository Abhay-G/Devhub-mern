import { useState } from 'react';
import { Background, Card, ImgCard, TextInput } from '../../../components';
import { BsArrowRightCircle } from 'react-icons/bs';
import { GiSteampunkGoggles } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSice';

const StepName = ({ changeStep }) => {
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.activate);
    const [fullname, setFullname] = useState(name);
    const submitName = () => {
        if (!fullname) return;
        dispatch(setName(fullname));
        changeStep();
    };
    return (
        <div className='relative'>
            <div className='mb-8'>
                <ImgCard
                    heading='Just few more steps'
                    subheading='Please fill all the asked information'
                />
            </div>
            <div>
                <Card
                    heading='Enter your Name'
                    icon={<GiSteampunkGoggles size='2rem' />}
                >
                    <TextInput
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <button
                        className='gradient_og transition duration-200 ease-in-out flex items-center py-4 px-6 text-white rounded-xl mb-3 hover:opacity-80'
                        onClick={submitName}
                    >
                        <span className='mr-4 text-lg font-semibold'>Next</span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                    <div className='px-10'>
                        <p className='text-grey-300 text-base leading-snug '>
                            Your name is beautiful, Why change it? People use
                            real name at devhub.
                        </p>
                    </div>
                </Card>
            </div>
            <Background />
        </div>
    );
};

export default StepName;
