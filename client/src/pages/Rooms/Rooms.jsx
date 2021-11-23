import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdRecordVoiceOver } from 'react-icons/md';
import { AddRoomModal, RoomCard } from '../../components';
import { getAllRooms } from '../../http';
import './Rooms.scss';
const rooms = [
    {
        id: 1,
        topic: 'Which framework is best for frontend',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/man.jpg',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/girl.jpg',
            },
        ],
        totalPeople: 40,
    },
    {
        id: 2,
        topic: 'Which new in Machine Learning',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/man.jpg',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/girl.jpg',
            },
        ],
        totalPeople: 20,
    },
    {
        id: 1,
        topic: 'Which framework is best for frontend',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/man.jpg',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/girl.jpg',
            },
        ],
        totalPeople: 40,
    },
    {
        id: 2,
        topic: 'Which new in Machine Learning',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/man.jpg',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/girl.jpg',
            },
        ],
        totalPeople: 20,
    },
];
const Rooms = () => {
    const [showModal, setShowModal] = useState(false);
    // const [rooms, setRooms] = useState([]);
    // useEffect(() => {
    //     const fetchRooms = async () => {
    //         const { data } = await getAllRooms();
    //         setRooms(data);
    //     };
    //     fetchRooms();
    // }, []);
    const openModal = () => {
        setShowModal(true);
    };
    return (
        <>
            <div className='container py-4 relative min-h-screen'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <span className='text_gradient_og heading_og mr-8 text-3xl font-bold'>
                            All voice rooms
                        </span>
                        <div className='relative'>
                            <div className='absolute top-2 left-2 text-grey-300 '>
                                <FiSearch size='1.5rem' />
                            </div>
                            <input
                                type='text'
                                placeholder='Search..'
                                className='py-2 px-10 bg-white text-blue-300 drop-shadow-custom-1 text-lg  rounded-full focus:outline-none'
                            />
                        </div>
                    </div>
                    <div className=''>
                        <button
                            className='bg-blue-300 transition duration-200 ease-in-out flex items-center py-3 px-8 text-white rounded-full mb-2 hover:bg-purple-300'
                            onClick={openModal}
                        >
                            <MdRecordVoiceOver size='1.5rem' />
                            <span className='ml-2'>Start a room</span>
                        </button>
                    </div>
                </div>
                <div className='rooms_list py-8'>
                    {rooms.map((room) => (
                        <>
                            <RoomCard key={room.id} room={room} />
                            <RoomCard key={room.id} room={room} />
                        </>
                    ))}
                </div>
                {showModal && (
                    <AddRoomModal onClose={() => setShowModal(false)} />
                )}
                <>
                    <img
                        className='absolute blob_blue_og'
                        src='/images/blob-blue.png'
                        alt=''
                    />
                    <img
                        className='absolute blob_purple_og'
                        src='/images/blob-purple.png'
                        alt=''
                    />
                    <img
                        className='absolute redvase_og'
                        src='/images/redvase.png'
                        alt=''
                    />
                    <img
                        className='absolute cube_og'
                        src='/images/cube.png'
                        alt=''
                    />
                    <img
                        className='absolute vase1_og'
                        src='/images/vase1.png'
                        alt=''
                    />
                </>
            </div>
        </>
    );
};

export default Rooms;
