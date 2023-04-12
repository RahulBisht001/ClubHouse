import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../../Components/shared/Card/Card'
import Button from '../../../Components/shared/Button/Button'
import TextInput from '../../../Components/shared/TextInput/TextInput'


import { setName } from '../../../store/activateSlice'

import styles from './StepName.module.css'

const StepName = ({ onNext }) => {

    const { name } = useSelector(state => state.activate)
    const dispatch = useDispatch()
    const [fullname, setFullname] = useState(name)

    const nextStep = () => {
        if (!fullname)
            return
        dispatch(setName(fullname))
        onNext()
    }

    return (
        <>
            <Card
                title="What is your Full Name"
                icon="goggle-emoji"
            >
                <TextInput
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={nextStep} text="Next" />
                    </div>
                </div>

                <p className={styles.paragraph}>
                    People use their real fullname at ClubHouse :)
                </p>
            </Card>
        </>
    )
}

export default StepName