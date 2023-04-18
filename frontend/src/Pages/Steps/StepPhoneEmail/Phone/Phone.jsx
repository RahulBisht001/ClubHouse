import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../../../../Components/shared/Card/Card'
import Button from '../../../../Components/shared/Button/Button'
import TextInput from '../../../../Components/shared/TextInput/TextInput'
import { sendOtp } from '../../../../HTTP/index'
import { setOtp } from '../../../../store/authSlice'


import styles from '../StepPhoneEmail.module.css'

const Phone = ({ onNext }) => {


    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch()

    const submit = async () => {

        // Don't make any server request if Phone field is empty
        if (!phoneNumber) {
            alert('Phone Field is Empty')
            return
        }
        // Make server request
        const { data } = await sendOtp({
            phone: phoneNumber
        })
        // console.log(data)
        dispatch(setOtp({ phone: data.phone, hash: data.hash }))
        onNext()
    }

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
                    <Button onClick={submit} text="Next" />
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