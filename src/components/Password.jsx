import { copyText } from '@/helpers'

const Password = ({ password }) => {

    const copy = () => copyText(password)

    return (
        <div>
            <h2>
                {password}
            </h2>

            <button onClick={copy}>
                Copy
            </button>
        </div>
    )
}

export default Password