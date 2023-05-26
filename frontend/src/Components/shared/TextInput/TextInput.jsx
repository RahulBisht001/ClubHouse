import React from 'react'

import styles from './TextInput.module.css'

const TextInput = (props) => {
    return (
        <>
            <input
                style={{ width: props.fullwidth === true ? "100%" : "inherit" }}
                className={styles.input}
                type="text" {...props}
            />
        </>
    )
}

export default TextInput