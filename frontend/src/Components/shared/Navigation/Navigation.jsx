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
    }


    return (
        <nav className={`${styles.navbar} container`} >
            <Link
                to="/"
                style={brandStyle}
            >
                <img src="/images/logo.png" alt="Logo" />
                <span style={logoText}>Club House</span>
            </Link>
        </nav >
    )
}

export default Navigation