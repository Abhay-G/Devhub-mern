import React from 'react';
import './RoomCard.scss';
import { useNavigate } from 'react-router-dom';
import { BsFillChatDotsFill, BsFillPeopleFill } from 'react-icons/bs';
const RoomCard = ({ room }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/room/${room.id}`)}
            className='room_card_og py-4 px-6 bg-blue-100 cursor-pointer'
        >
            <h3 className='mb-4 text-purple-300'>{room.topic}</h3>
            <div
                className={`flex items-center relative mb-4 ${
                    room.speakers.length === 1 && 'single_speaker_og'
                }`}
            >
                <div className='avatars flex'>
                    {room.speakers.map((speaker) => (
                        <img
                            key={speaker.id}
                            className='h-12 w-12 object-cover border-2 border-blue-300 rounded-full absolute'
                            src={speaker.avatar}
                            alt='speaker-avatar'
                        />
                    ))}
                </div>
                <div>
                    {room.speakers.map((speaker) => (
                        <div
                            key={speaker.id}
                            className='names_og flex items-center ml-24 text-purple-300'
                        >
                            <span className='mr-2'>{speaker.name}</span>
                            <BsFillChatDotsFill />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-end text-purple-300'>
                <span className='mr-2'>{room.totalPeople}</span>

                <BsFillPeopleFill />
            </div>
        </div>
    );
};

export default RoomCard;
