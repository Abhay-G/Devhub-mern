import { useState } from 'react';
import { IoIosPeople, IoIosCloseCircleOutline } from 'react-icons/io';
import {
    GiEarthAmerica,
    GiCombinationLock,
    GiPartyPopper,
} from 'react-icons/gi';
import { createRoom as create } from '../../http';
import { toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AddRoomModal.scss';

const AddRoomModal = ({ onClose }) => {
    let navigate = useNavigate();
    const [roomType, setRoomType] = useState('open');
    const [topic, setTopic] = useState('');
    const createRoom = async () => {
        //server call
        try {
            if (!topic) {
                return toast('🎃 Please enter the topic!', {
                    transition: Bounce,
                    autoClose: 3000,
                    theme: 'dark',
                });
            }
            const { data } = await create({ topic, roomType });
            navigate(`/room/${data.id}`);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='mask_og fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center '>
            <div className='top-0 w-1/2 max-w-lg bg-white rounded-2xl py-4 relative'>
                <button
                    className='absolute right-5 top-5 text-blue-300'
                    onClick={onClose}
                >
                    <IoIosCloseCircleOutline size='2rem' />
                </button>
                <div className='py-6 px-8 border-b-2 border-grey-200 '>
                    <h3 className='text_gradient_og  mb-4 font-semibold text-2xl'>
                        Enter the topic to be discussed
                    </h3>

                    <input
                        type='text'
                        placeholder='Create..'
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className='py-2 px-10 w-full bg-grey-200 mb-6 text-blue-300 drop-shadow-custom-1 text-lg  rounded-full focus:outline-none'
                    />
                    <div>
                        <h3 className='mb-4 text-purple-300 -mt-2 font-semibold'>
                            Room type
                        </h3>
                        <div className='flex items-center justify-around'>
                            <button onClick={() => setRoomType('open')}>
                                <div
                                    className={`p-2 text-blue-300 rounded-full ${
                                        roomType === 'open' ? 'active' : ''
                                    }`}
                                >
                                    <GiEarthAmerica size='2rem' />
                                </div>

                                <span className='text-grey-300 mt-2'>Open</span>
                            </button>
                            <button onClick={() => setRoomType('social')}>
                                <div
                                    className={`p-2 text-blue-300 rounded-full ${
                                        roomType === 'social' ? 'active' : ''
                                    }`}
                                >
                                    <IoIosPeople size='2rem' />
                                </div>
                                <span className='text-grey-300 mt-2'>
                                    Social
                                </span>
                            </button>
                            <button onClick={() => setRoomType('close')}>
                                <div
                                    className={`p-2 text-blue-300 rounded-full ${
                                        roomType === 'close' ? 'active' : ''
                                    }`}
                                >
                                    <GiCombinationLock size='2rem' />
                                </div>

                                <span className='text-grey-300 mt-2'>
                                    Closed
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='py-6 px-8 flex flex-col items-center'>
                    <h4 className='text-xl text-center text-grey-300 mb-4'>
                        Start a room, open to everyone
                    </h4>
                    <button
                        className='gradient_og flex items-center py-3 px-6 text-white rounded-full hover:opacity-80 '
                        onClick={createRoom}
                    >
                        <GiPartyPopper size='2rem' />
                        <span className='ml-2'>Let's Go</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddRoomModal;
