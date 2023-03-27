import { useState } from 'react'

import Header from '@components/Header'
import Checkbox from '@components/Checkbox'
import Button from '@components/Button'

import options from '@/data'
import { createPassword } from '@/helpers'

const App = () => {

    const [requirements, setRequirements] = useState([])

    const handleChange = (checked, value) => {
        if (checked)
            setRequirements(requirements => [value, ...requirements])
        else
            setRequirements(requirements => requirements.filter(item => item !== value))
    }

    const handleGeneratePassword = () => {
        const password = createPassword(requirements)
        console.log(password)
    }

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

            <Button generatePassword={handleGeneratePassword} />

        </div>
    )
}

export default App