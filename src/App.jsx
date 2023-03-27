import { useState } from 'react'

import Header from '@components/Header'
import Checkbox from '@components/Checkbox'
import Button from '@components/Button'
import Range from '@components/Range'

import options from '@/data'
import { createPassword } from '@/helpers'

const App = () => {
    const [requirements, setRequirements] = useState([])
    const [passwordLength, setPasswordLength] = useState(24)
    const [password, setPassword] = useState(null)

    const handleChange = (checked, value) => {
        if (checked)
            setRequirements(requirements => [value, ...requirements])
        else
            setRequirements(requirements => requirements.filter(item => item !== value))
    }

    const handleGeneratePassword = () => setPassword(createPassword(requirements, passwordLength))

    return (
        <div className="App">
            <Header />

            <div className="checkbox-container">
                {
                    options.map(({id, value, label}) =>
                        <Checkbox
                            key={id}
                            id={id}
                            value={value}
                            label={label}
                            changeSelection={handleChange} />
                    )
                }
            </div>

            <Range updateLength={setPasswordLength} />

            <Button generatePassword={handleGeneratePassword} />

            {
                password &&
                <h2>
                    {password}
                </h2>
            }

        </div>
    )
}

export default App