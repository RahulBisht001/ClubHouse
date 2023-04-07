import React from 'react'
import { useState } from 'react'


import Card from '../../../../Components/shared/Card/Card'
import Button from '../../../../Components/shared/Button/Button'
import TextInput from '../../../../Components/shared/TextInput/TextInput'


import styles from '../StepPhoneEmail.module.css'


const Email = ({ onNext }) => {

    const [email, setEmail] = useState('')

    return (
        <Card
            title="Enter Your Email Id"
            icon="email-emoji"
        >
            <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
    )
}

export default Email