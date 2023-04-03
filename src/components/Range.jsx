import { useState } from 'react'

import '@styles/range.css'

const Button = ({ updateLength }) => {
    const [passwordLength, setPasswordLength] = useState(24)

    const handleUpdate = ({target}) => {
        setPasswordLength(target.value)
        updateLength(target.value)
    }

    return (
        <div className='range-container'>
            <span>
                Password Length: {passwordLength}
            </span>
            <input
                type="range"
                min={6}
                max={24}
                className='range'
                onChange={handleUpdate} />
        </div>
    )
}

export default Button