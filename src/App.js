import React from 'react'
import './App.css'
import AxInput from './Atoms/AxInput/AxInput'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('3')
  return (
    <AxInput
      value={value}
      setValue={setValue}
      placeholder={'Elon Musk'}
      validationRules={{
        notEmpty: true,
        onlyDigits: true,
        // noSpecials: true,
        onlyLetters: true,
      }}
      actionOnEdit={'focus'}
      inputTargetStyle={'skillDuration'}
    />
  )
}

export default App
