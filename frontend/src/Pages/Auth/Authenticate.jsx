import React from 'react'
import { useState } from 'react'


import styles from './Authenticate.module.css'

import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTP from '../Steps/StepOTP/StepOTP'

const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
}

const Authenticate = () => {

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

export default Authenticate