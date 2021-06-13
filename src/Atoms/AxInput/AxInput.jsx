import React, { useEffect, useRef, useState } from 'react'
import validateAll from './AxInputValidation'

const AxInput = ({ value, setValue, validationRules, placeholder, actionOnEdit }) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Unknown Error!')
  const inputRef = useRef()

  const toggleVisibility = () => {
    if (!showError) {
      setShowDiv(!showDiv)
      setShowInput(!showInput)
    }
  }

  const handleKeys = (e) => {
    if (e.charCode === 13) {
      toggleVisibility()
    }
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const focusInput = () => {
    if (showInput) {
      switch (actionOnEdit) {
        case 'focus':
          inputRef.current.focus()
          break
        case 'select':
          inputRef.current.select()
          break
        default:
          return
      }
    }
  }

  useEffect(() => {
    focusInput()
  }, [showInput])

  useEffect(() => {
    validateAll(value, validationRules, setShowError, setErrorMessage)
  }, [value])

  return (
    <div>
      {showInput && (
        <input
          ref={inputRef}
          value={value}
          onInput={handleInputChange}
          onBlur={toggleVisibility}
          onKeyPress={handleKeys}
          placeholder={placeholder}
          required={true}
        />
      )}
      {showDiv && <div onClick={toggleVisibility}>{value}</div>}
      {showError && <div> {errorMessage} </div>}
    </div>
  )
}

export default AxInput
