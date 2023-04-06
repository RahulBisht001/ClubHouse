import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Card from '../../Components/shared/Card/Card'
import Button from '../../Components/shared/Button/Button'


import styles from './Home.module.css'


const Home = () => {

    //  Inline Css in the Form of object
    const signinLinkStyle = {
        color: ' #9000ff',
        textDecoration: 'none',
        fontWeight: '500',
        marginLeft: '10px'
    }


    const navigate = useNavigate()
    const startRegister = () => {
        navigate('/register')
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
                    {/* Button is a Component here and we can't directly add 
                    an onClick event here so we pass it as a prop */}
                    <Button onClick={startRegister} text="Get Your UserName" />
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


