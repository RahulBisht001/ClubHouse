/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import styles from './AddRoomModel.module.css'
import TextInput from '../shared/TextInput/TextInput'

//^ Using Material UI Icons in place of shady icons
import CloseIcon from '@mui/icons-material/Close';



const AddRoomModel = ({ onClose }) => {
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
                        <TextInput fullwidth={true} />

                        <h3 className={styles.subHeading} >Room Types</h3>
                        <div className={styles.roomTypes}>
                            <div className={styles.typeBox}>
                                <img src="/images/globe.png" alt="GlobeImage" />
                                <span>Open</span>
                            </div>

                            <div className={styles.typeBox}>
                                <img src="/images/social.png" alt="GlobeImage" />
                                <span>Social</span>
                            </div>

                            <div className={styles.typeBox}>
                                <img src="/images/lock.png" alt="GlobeImage" />
                                <span>Private</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modelFooter}>
                        <h3>Start a room , open for everyone</h3>
                        <button className={styles.footerButton}>
                            <img src="/images/celebration.png" alt="Celebration Image" />
                            <span> Let's go</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRoomModel