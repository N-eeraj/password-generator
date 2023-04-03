import { copyText } from '@/helpers'

import '@styles/password.css'

const Password = ({ password }) => {

    const copy = () => copyText(password)

    return (
        <div className='password-container'>
            <h2 className='password'>
                {password}
            </h2>

            <button
                className='copy-button'
                onClick={copy}>
                Copy
            </button>
        </div>
    )
}

export default Password