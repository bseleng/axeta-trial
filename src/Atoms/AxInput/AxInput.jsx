import React, { useEffect, useRef, useState } from 'react'
import { cleanup } from '@testing-library/react'

const AxInput = ({ value, setValue, validationRules, placeholder }) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Unknown Error!')
  const inputRef = useRef()

  const validateEmpty = () => {
    if (value === '') {
      setShowError(true)
      setErrorMessage('Cannot be empty!')
    } else {
      setErrorMessage('Unknown Error!')
      setShowError(false)
    }
  }

  const validateDigits = (bool) => {
    const reg = /^\d*\.?\d*$/
    const regComa = /\,/
    if (!value.match(reg)) {
      setShowError(true)
      setErrorMessage('Only digits are allowed!')
    }
    if (value.match(regComa)) {
      setShowError(true)
      setErrorMessage('Try . instead of ,')
    }
  }

  const validateSpecial = () => {
    const reg = /[!@#$%^&*()_+="'`~?.,:;№<>[\]{}|\/\-]/
    if (value.match(reg)) {
      setShowError(true)
      setErrorMessage('Special characters are not allowed!')
    }
  }

  const validateAll = () => {
    if (validationRules.notEmpty) {
      validateEmpty()
    }

    if (validationRules.onlyDigits) {
      validateDigits()
    }

    if (validationRules.noSpecials) {
      validateSpecial()
    }
  }

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
      // inputRef.current.focus()
      inputRef.current.select()
    }
  }

  useEffect(() => {
    focusInput()
  }, [showInput])

  useEffect(() => {
    validateAll()
  }, [value])

  return (
    <>
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
    </>
  )
}

export default AxInput
