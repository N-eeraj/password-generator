import '@styles/generate-button.css'

const Button = ({ generatePassword }) => {
    return (
        <button className='generate-button' onClick={generatePassword}>
            Generate Password
        </button>
    )
}

export default Button