import React from 'react'


import styles from './Card.module.css'

const Card = ({ title, icon, children }) => {
    return (
        <div className={`${styles.card}`}>

            <div className={`${styles.headingWrapper}`}>
                {icon && <img className={`${icon === 'logo' ? 'wave' : ''}`}
                    src={`/images/${icon}.png`} alt="headingLogo" />}
                {title && <h1 className={`${styles.heading}`}>{title}</h1>}
            </div>


            {children}

        </div >
    )
}

export default Card