import React from 'react'
import { useState } from 'react'


import styles from './Authenticate.module.css'


import StepOTP from '../Steps/StepOTP/StepOTP'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'

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
            <h1>Hello From Authentication</h1>
            <Step onNext={onNext} />
        </>
    )
}

export default Authenticate