import React from 'react'
import './App.css'
import AtmInput from './Atoms/AtmInput/AtmInput'
import { useState } from 'react'
import MolSection from './Molecules/MolSection/MolSection'
import OrgMain from './Organisms/OrgMain'

const App = () => {
  const [value, setValue] = useState('3.1')
  return (
    <>
      <AtmInput
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
      <OrgMain />
    </>
  )
}

export default App
