import React from 'react'
import { useState } from 'react'

import styles from './Register.module.css'

import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepName from '../Steps/StepName/StepName'
import StepOTP from '../Steps/StepOTP/StepOTP'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepUserName from '../Steps/StepUserName/StepUserName'

const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
    3: StepName,
    4: StepUserName,
    5: StepAvatar,
}



const Register = () => {

    const [step, setStep] = useState(1)

    const Step = steps[step]

    const onNext = () => {
        setStep(step + 1)
    }


    return (
        <>
            <Step onNext={onNext} />
        </>
    )
}

export default Register