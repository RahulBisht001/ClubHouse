import React from 'react'
import { useState } from 'react'


import styles from './Login.module.css'


import StepOTP from '../Steps/StepOTP/StepOTP'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'

const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
}

const Login = () => {

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

export default Login