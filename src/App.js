import React from 'react'
import './App.css'
import AtmInput from './Atoms/AtmInput/AtmInput'
import { useState } from 'react'
import MolSection from './Molecules/MolSection/MolSection'

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

      <MolSection
        text={'Portfolio'}
        type={'portfolio'}
        content={[
          { text: 'Bootstrap 4 Material Design (Sample Link)', link: '#' },
          { text: 'Modern JavaScript stack', link: '#' },
          { text: 'Datepicker for twitter bootstrap', link: '#' },
          { text: 'Fast and reliable Bootstrap widgets in Angular', link: '#' },
        ]}
      />
    </>
  )
}

export default App
