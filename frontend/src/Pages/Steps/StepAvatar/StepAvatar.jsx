import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import Card from '../../../Components/shared/Card/Card'
import Button from '../../../Components/shared/Button/Button'

import { setAvatar } from '../../../store/activateSlice'
import { setAuth } from '../../../store/authSlice'
import { activate } from '../../../HTTP/index'

import styles from './StepAvatar.module.css'
import Loader from '../../../Components/shared/Loader/Loader'


const StepAvatar = ({ onNext }) => {

    const [image, setImage] = useState('/images/monkey-avatar.png')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch('')
    const { name, avatar } = useSelector((state) => state.activate)


    const submit = async () => {

        if (!name || !avatar) {
            alert('Name or Avatar Field is Empty')
            return
        }

        setLoading(true)

        try {
            const { data } = await activate({
                name,
                avatar
            })

            if (data.auth) {
                dispatch(setAuth(data))
            }
        }
        catch (err) {
            console.log('Error in the StepAvatar Component')
            console.log(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    const captureImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImage(reader.result)
            dispatch(setAvatar(reader.result))
        }

    }

    if (loading)
        return <Loader message={"Activation in Progress . . ."} />

    return (
        <>
            <Card
                title={`Okay ${name} !`}
                icon="monkey-emoji"
            >
                <p className={styles.subHeading}>How's this Photo</p>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src={image} alt="" />
                </div>
                <div>
                    <input
                        onChange={captureImage}
                        id='avatar'
                        type='file'
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatar">
                        Choose a Different Photo
                    </label>
                </div>
                <div>
                    <div className={styles.actionButtonWrap}>
                        <Button onClick={submit} text="Next" />
                    </div>
                </div>
            </Card>
        </>

    )
}

export default StepAvatar