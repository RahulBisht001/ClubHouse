import React, { useState } from 'react'

import styles from './AddRoomModel.module.css'
import TextInput from '../shared/TextInput/TextInput'

//^ Using Material UI Icons in place of shady icons
import CloseIcon from '@mui/icons-material/Close'


import toast from 'react-hot-toast'


//? -------- axios calls ( client to server) ---------
import { createRoom as create } from '../../HTTP'

import { useNavigate } from 'react-router-dom'



const AddRoomModel = ({ onClose }) => {

    const navigate = useNavigate()
    const [roomType, setRoomType] = useState('open')
    const [topic, setTopic] = useState('')

    //^ when this method will be called we will send our 
    //^ model info(topic and room type to the backend)
    const createRoom = async () => {

        //? server call
        try {
            if (!topic) {
                toast.error('Please Enter the Topic of the Room')
                // alert("Please Enter the Topic")
                return
            }
            const { data } = await create({ topic, roomType })
            console.log(data)

            navigate(`/room/${data.id}`)
        }
        catch (err) {
            console.log("Error in the createRoom func in AddRoomModel")
            console.log(err)
        }

    }



    return (
        <>
            <div className={styles.modelMask}>
                <div className={styles.modelBody}>

                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                    >
                        <CloseIcon style={{ color: '#fff' }} />
                    </button>

                    <div className={styles.modelHeader}>
                        <h4 className={styles.heading}>Enter the topic to be discussed</h4>

                        <TextInput
                            fullwidth={true}
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />

                        <h3 className={styles.subHeading} >Room Types</h3>

                        <div className={styles.roomTypes}>

                            <div
                                onClick={() => setRoomType('open')}
                                className={`${styles.typeBox} 
                                ${roomType === 'open' ? styles.active : ''}`}
                            >
                                <img src="/images/globe.png" alt="GlobeImage" />
                                <span>Open</span>
                            </div>

                            <div
                                onClick={() => setRoomType('social')}
                                className={`${styles.typeBox} 
                                ${roomType === 'social' ? styles.active : ''}`}
                            >
                                <img src="/images/social.png" alt="GlobeImage" />
                                <span>Social</span>
                            </div>

                            <div
                                onClick={() => setRoomType('private')}
                                className={`${styles.typeBox} 
                                ${roomType === 'private' ? styles.active : ''}`}
                            >
                                <img src="/images/lock.png" alt="GlobeImage" />
                                <span>Private</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modelFooter}>
                        <h3>Start a room , open for everyone</h3>
                        <button
                            onClick={createRoom}
                            className={styles.footerButton}
                        >
                            <img src="/images/celebration.png" alt="CelebrationImage" />
                            <span> Let's go</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRoomModel