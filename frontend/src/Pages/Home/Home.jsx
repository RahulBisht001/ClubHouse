import React from 'react'
import { useNavigate } from 'react-router-dom'


import Card from '../../Components/shared/Card/Card'
import Button from '../../Components/shared/Button/Button'


import styles from './Home.module.css'


const Home = () => {

    const navigate = useNavigate()

    const startRegister = () => {
        navigate('/authenticate')
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
                    {
                        /* Button is a Component here and we can't directly add
                        an onClick event here so we pass it as a prop */
                    }
                    <Button onClick={startRegister} text="   Let's get Started" />
                </div>

                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text ?</span>

                </div>
            </Card>
        </div>
    )
}

export default Home
