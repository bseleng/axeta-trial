import React, { useEffect, useRef, useState } from 'react'

const AxInput = ({ value, setValue, validationRules, placeholder }) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Error!')
  const inputRef = useRef()

  const validate = () => {
    switch (value) {
      case '':
        setShowError(true)
        setErrorMessage('Cannot be empty!')
        break

      default:
        setErrorMessage('Error!')
        setShowError(false)
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
    validate()
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
