import React from 'react'
import styles from './RoomCard.module.css'

import { useNavigate } from 'react-router-dom'

//^ Using Material UI Icons in place of shady images 

import PersonIcon from '@mui/icons-material/Person'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
// import SmsRoundedIcon from '@mui/icons-material/SmsRounded';



const RoomCard = ({ room }) => {

    const navigate = useNavigate()

    return (
        <>
            <div
                className={styles.card}
                onClick={() => navigate(`/room/${room.id}`)}
            >
                <h3 className={styles.topic}>{room.topic}</h3>

                <div className={`${styles.speakers} ${room.speakers.length === 1 ? styles.singleSpeaker : ''}`}>
                    <div className={styles.avatars}>
                        {room.speakers.map((speaker) => (
                            <img
                                key={speaker.id}
                                src={speaker.avatar}
                                alt="speaker Avatar"
                            />
                        ))}
                    </div>
                    <div className={styles.names}>
                        {room.speakers.map((speaker) => (
                            <div key={speaker.id} className={styles.nameWrapper}>
                                <span>{speaker.name}</span>
                                {/* <img
                                    src="/images/chat-bubble.png"
                                    alt="chat-bubble"
                                /> */}
                                {/* <SmsRoundedIcon fontSize='small' /> */}
                                <ForumRoundedIcon fontSize='small' />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.peopleCount}>
                    <span>{room.speakers.length}</span>
                    <PersonIcon />
                    {/* <img src="/images/user-icon.png" alt="user-icon" /> */}
                </div>
            </div>
        </>
    )
}

export default RoomCard