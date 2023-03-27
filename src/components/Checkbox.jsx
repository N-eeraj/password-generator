const Checkbox = ({ id, value, label, changeSelection }) => {
    return (
        <>
            <input
                id={id}
                type="checkbox"
                value={value}
                onChange={({ target }) => changeSelection(target.checked, target.value)} />

            <label htmlFor={ id }>
                {label}
            </label>
        </>
    )
}

export default Checkbox