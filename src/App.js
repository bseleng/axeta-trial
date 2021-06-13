import './App.css'
import AxInput from './Atoms/AxInput/AxInput'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('qwe')
  return (
    <AxInput
      value={value}
      setValue={setValue}
      placeholder={'First Name Last Name'}
      validationRules={{
        notEmpty: true,
        onlyDigits: false,
        noSpecials: true,
        onlyLetters: true,
      }}
    />
  )
}

export default App
