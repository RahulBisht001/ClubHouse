import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import { setAuth } from '../../../store/authSlice'
import { logout } from '../../../HTTP'

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
        letterSpacing: '.2ch'
    }

    const logoStyle = {
        width: '55px',
        height: '45px',
        borderRadius: '10px',
    }

    const dispatch = useDispatch()
    const { isAuth } = useSelector(state => state.auth)

    const logoutUser = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
        }
        catch (err) {
            console.log('Error in Logout Navigation Component')
            console.log(err.message)
        }

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

            {isAuth && (<button onClick={logoutUser}>
                LogOut
            </button>)}
        </nav >
    )
}

export default Navigation