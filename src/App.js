import React, { useState } from 'react'
import './App.css'
import AtmInput from './Atoms/AtmInput/AtmInput'
import OrgMain from './Organisms/OrgMain/OrgMain'
import AtmCodeHighlighter from './Atoms/AtmCodeHighliter/AtmCodeHighlighter'
import TmpMainAndAside from './Templates/TmpMainAndAside/TmpMainAndAside'

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
      <TmpMainAndAside />
    </>
  )
}

export default App
