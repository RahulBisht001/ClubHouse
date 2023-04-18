import React from 'react'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import Card from '../../../Components/shared/Card/Card'
import Button from '../../../Components/shared/Button/Button'
import TextInput from '../../../Components/shared/TextInput/TextInput'

import { verifyOtp } from '../../../HTTP'

import { setAuth } from '../../../store/authSlice'
import styles from './StepOTP.module.css'



const StepOTP = () => {

    const [otp, setOtp] = useState(0)
    const { phone, hash } = useSelector((state) => state.auth.otp)

    const dispatch = useDispatch()


    const submit = async () => {

        if (!otp || !phone || !hash) {
            alert('Otp Field is Empty')
            return
        }
        try {
            const { data } = await verifyOtp({ otp, phone, hash })
            dispatch(setAuth(data))

        } catch (err) {
            console.log('Error Occured while sending Otp for verification the server')
            console.log(err.message)
        }
    }


    return (
        <div className={styles.cardWrapper} >
            <Card
                title="Enter the code we just text you"
                icon="lock-emoji"
            >
                <TextInput
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={submit} text="Next" />
                    </div>

                    <p className={styles.bottomParagraph}>
                        By entering your email ,you're agreeing to our Terms of
                        Service and Privacy Policy. Thanks !
                    </p>
                </div>
            </Card>
        </div >
    )
}

export default StepOTP