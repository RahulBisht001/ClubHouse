import React from 'react'
import { useState } from 'react'


import Card from '../../../Components/shared/Card/Card'
import Button from '../../../Components/shared/Button/Button'
import TextInput from '../../../Components/shared/TextInput/TextInput'



import styles from './StepOTP.module.css'

const StepOTP = ({ onNext }) => {

    const [otp, setOtp] = useState(0)
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
                        <Button onClick={onNext} text="Next" />
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