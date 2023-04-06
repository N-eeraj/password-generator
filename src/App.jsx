import { useState } from 'react'

import Header from '@components/Header'
import Checkbox from '@components/Checkbox'
import GenerateButton from '@components/GenerateButton'
import Range from '@components/Range'
import Password from '@components/Password'

import options from '@/data'
import { createPassword } from '@/helpers'

import '@styles/index.css'

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
        <div className='App'>
            <Header />

            <div className='checkbox-container'>
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

            <GenerateButton generatePassword={handleGeneratePassword} />

            {password && <Password password={password} />}

        </div>
    )
}

export default App