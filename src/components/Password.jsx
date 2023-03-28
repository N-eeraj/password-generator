const Password = ({ password }) => {
    const copy = () => {
        navigator.clipboard.writeText(password)
        alert('Copied Password!')
    }

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