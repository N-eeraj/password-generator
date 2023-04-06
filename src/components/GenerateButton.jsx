import '@styles/generate-button.css'

const GenerateButton = ({ generatePassword }) => {
    return (
        <button className='generate-button' onClick={generatePassword}>
            Generate Password
        </button>
    )
}

export default GenerateButton