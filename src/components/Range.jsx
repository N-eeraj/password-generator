const Button = ({ updateLength }) => {
    return (
        <input
            type="range"
            min={6}
            max={24}
            onChange={({target}) => updateLength(target.value)} />
    )
}

export default Button