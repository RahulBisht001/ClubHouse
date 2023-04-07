import React from 'react'
import { useState } from 'react'

import Card from '../../../../Components/shared/Card/Card'
import Button from '../../../../Components/shared/Button/Button'
import TextInput from '../../../../Components/shared/TextInput/TextInput'

import styles from '../StepPhoneEmail.module.css'

const Phone = ({ onNext }) => {


    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <Card
            title="Enter Your Phone Number"
            icon="phone"
        >
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button onClick={onNext} text="Next" />
                </div>

                <p className={styles.bottomParagraph}>
                    By entering your number ,you're agreeing to our Terms of
                    Service and Privacy Policy. Thanks !
                </p>
            </div>
        </Card>
    )
}

export default Phone