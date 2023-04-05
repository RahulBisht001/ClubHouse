import React from 'react'
import { Link } from 'react-router-dom'


import Card from '../../Components/shared/Card/Card'
import Button from '../../Components/shared/Button/Button'


import styles from './Home.module.css'


const Home = () => {

    const signinLinkStyle = {
        color: '#0077ff',
        textDecoration: 'none',
        fontWeight: '600',
        marginLeft: '10px'
    }



    return (

        <div className={`${styles.cardWrapper}`}>
            <Card
                title="Welcome to ClubHouse !"
                icon="logo"
            >
                <p className={`${styles.text}`}>
                    We’re working hard to get Club House ready for
                    everyone! While we wrap up the finishing youches,
                    we’re adding people gradually to make sure nothing breaks
                </p >

                <div>
                    <Button text="Get Your UserName" />
                </div>

                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text ?</span>
                    <Link
                        to={'/Login'}
                        style={signinLinkStyle}
                    >
                        Sign In
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default Home


