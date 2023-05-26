import React from 'react'


import styles from './Rooms.module.css'
import rooms from '../../dummyData'
import RoomCard from '../../Components/RoomCard/RoomCard'

console.log(rooms[0])


const Rooms = () => {
    return (
        <>
            <div className='container'>
                <div className={styles.roomsHeader}>

                    <div className={styles.left}>
                        <span className={styles.heading}>
                            All voices room
                        </span>
                        <div className={styles.searchBox}>
                            <img src="/images/search-icon.png" alt="search" />
                            <input type="text" className={styles.searchInput} />
                        </div>
                    </div>

                    <div className={styles.right}>
                        <button className={styles.startRoomButton}>
                            <img src="/images/add-room-icon.png" alt="Start Room Button Icon" />
                            <span>Start new Room</span>
                        </button>
                    </div>

                </div>


                <div className={styles.roomList}>
                    {
                        rooms.map((room) => (
                            <>
                                <RoomCard key={room.id} room={room} />
                                <RoomCard key={room.id} room={room} />
                                <RoomCard key={room.id} room={room} />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Rooms