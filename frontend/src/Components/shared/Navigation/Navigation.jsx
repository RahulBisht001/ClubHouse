import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import { setAuth } from '../../../store/authSlice'
import { logout } from '../../../HTTP'

import styles from './Navigation.module.css'


import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import { IconButton, Tooltip } from '@mui/material'

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
    const { isAuth, user } = useSelector(state => state.auth)

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
    console.log(isAuth)

    return (


        <nav className={`${styles.navbar} container`} >
            <Link
                to="/"
                style={brandStyle}
            >
                <img style={logoStyle} src="/images/microphone.png" alt="Logo" />
                <span style={logoText}>Club House</span>
            </Link>

            {isAuth && (
                <div className={styles.navRight}>
                    <h3>{user?.name}</h3>
                    <Link to="/">
                        <img
                            className={styles.avatar}
                            src={
                                user.avatar
                                    ? user.avatar
                                    : '/images/monkey-avatar.png'
                            }
                            width="40"
                            height="40"
                            alt="avatar"
                        />
                    </Link>
                    <button
                        className={styles.logoutButton}
                        onClick={logoutUser}
                    >
                        <Tooltip title="logout">
                            <IconButton>
                                <LogoutRoundedIcon style={{ color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                        {/* <img src="/images/logout.png" alt="logout" /> */}
                    </button>
                </div>
            )}
        </nav >
    )
}

export default Navigation






    // <div div className = { styles.navRight } >
    //             <h3>{user && user.name}</h3>
    //             <Link to="/">
    //                 {
    //                     user &&
    //                     <img
    //                         className={styles.avatar}
    //                         src={
    //                             user.avatar
    //                                 ? user.avatar
    //                                 : '/images/monkey-avatar.png'
    //                         }
    //                         width="40"
    //                         height="40"
    //                         alt="avatar"
    //                     />
    //                 }
    //             </Link>

    //             <button
    //                 className={styles.logoutButton}
    //                 onClick={logoutUser}
    //             >
    //                 <img src="/images/logout.png" alt="" />
    //             </button>
    //         </div >