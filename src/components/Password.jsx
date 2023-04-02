const Password = ({ password }) => {
    const copy = () => {
        const dummy = document.createElement('textarea')
        document.body.appendChild(dummy)
        dummy.value = password
        dummy.select()
        document.execCommand('copy')
        document.body.removeChild(dummy)
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