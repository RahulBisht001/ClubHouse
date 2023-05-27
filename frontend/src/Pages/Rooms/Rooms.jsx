import React, { useEffect, useState } from 'react'

import styles from './Rooms.module.css'

//! -----------This is Dummy Data just for testing purpose --------
// import rooms from '../../dummyData'

import RoomCard from '../../Components/RoomCard/RoomCard'
import AddRoomModel from '../../Components/AddRoomModel/AddRoomModel'

//! --------- Using Material UI Icons in place of shady images ------

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded'
import { getAllRooms } from '../../HTTP';

// console.log(rooms[0])




const Rooms = () => {

    const [rooms, setRooms] = useState([])
    const [showModel, setShowModel] = useState(false)

    useEffect(() => {

        const fetchRooms = async () => {
            const allRooms = await getAllRooms()
            console.log("roomsData")
            console.log(allRooms.data)

            setRooms(allRooms.data)
        }
        fetchRooms()
    }, [])

    const showModelHandler = () => {
        setShowModel(true)
    }


    return (
        <>
            <div className='container'>
                <div className={styles.roomsHeader}>

                    <div className={styles.left}>
                        <span className={styles.heading}>
                            All voices room
                        </span>
                        <div className={styles.searchBox}>

                            <SearchRoundedIcon />
                            {/* <img src="/images/search-icon.png" alt="search" /> */}
                            <input type="text" className={styles.searchInput} />
                        </div>
                    </div>

                    <div className={styles.right}>
                        <button
                            onClick={showModelHandler}
                            className={styles.startRoomButton}
                        >
                            <RecordVoiceOverRoundedIcon />
                            {/* <img src="/images/add-room-icon.png" alt="Start Room Button Icon" /> */}
                            <span>Start new Room</span>
                        </button>
                    </div>

                </div>


                <div className={styles.roomList}>
                    {
                        rooms.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))
                    }
                </div>
            </div>
            {showModel && <AddRoomModel onClose={() => setShowModel(false)} />}
        </>
    )
}

export default Rooms