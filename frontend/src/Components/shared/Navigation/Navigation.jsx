import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.css'

const Navigation = () => {

    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'
    }

    const logoText = {
        marginLeft: '12px',
        fontSize: '25px',
        fontFamily: "'Pacifico', cursive",
        letterSpacing: '.2ch',
        // textShadow: '0px 0px 10px #5932F2'
    }

    const logoStyle = {
        width: '55px',
        height: '45px',
        borderRadius: '10px',
        // boxShadow: '0 0 12px #5932F2'
    }

    return (

        <nav className={`${styles.navbar} container`} >
            <Link
                to="/"
                style={brandStyle}
            >
                <img style={logoStyle} src="/images/microphone.png" alt="Logo" />
                <span style={logoText}>Club House</span>
            </Link>
        </nav >
    )
}

export default Navigation