import React, { useEffect, useRef, useState } from 'react'

const AxInput = ({ value, setValue, validation, errorMessage }) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const inputRef = useRef()

  const toggleVisibility = () => {
    setShowDiv(!showDiv)
    setShowInput(!showInput)
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

  return (
    <>
      {showInput && (
        <input
          ref={inputRef}
          value={value}
          onInput={handleInputChange}
          onBlur={toggleVisibility}
          onKeyPress={handleKeys}
        />
      )}
      {showDiv && <div onClick={toggleVisibility}> {value}</div>}
    </>
  )
}

export default AxInput
