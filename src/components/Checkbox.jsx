import '@styles/checkbox.css'

const Checkbox = ({ id, value, label, changeSelection }) => {
    return (
        <div className='checkbox'>
            <input
                id={id}
                type="checkbox"
                value={value}
                onChange={({ target }) => changeSelection(target.checked, target.value)} />

            <label htmlFor={ id }>
                {label}
            </label>
        </div>
    )
}

export default Checkbox