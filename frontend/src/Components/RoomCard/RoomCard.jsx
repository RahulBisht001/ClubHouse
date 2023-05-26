import React from 'react'
import styles from './RoomCard.module.css'


//^ Using Material UI Icons in place of shady images 

import PersonIcon from '@mui/icons-material/Person'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
// import SmsRoundedIcon from '@mui/icons-material/SmsRounded';



const RoomCard = ({ room }) => {
    return (
        <>
            <div className={styles.card}>
                <h3 className={styles.topic}>{room.topic}</h3>

                <div className={styles.speakers}>
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
                    <span>{room.totalPeople}</span>
                    <PersonIcon />
                    {/* <img src="/images/user-icon.png" alt="user-icon" /> */}
                </div>
            </div>
        </>
    )
}

export default RoomCard