import React from 'react'
// import { Link } from 'react-router-dom'


import styles from './Card.module.css'

const Card = ({ title, icon, children }) => {
    return (
        <div className={`${styles.card}`}>

            <div className={`${styles.headingWrapper}`}>
                <img src={`/images/${icon}.png`} alt="headingLogo" />
                <h1 className={`${styles.heading}`}>{title}</h1>
            </div>


            {children}

        </div >
    )
}

export default Card