import React, { useState } from 'react'

const AxInput = ({ value, setValue, validation, errorMessage }) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      {showInput && <input value={value} onInput={handleInputChange} />}
      {showDiv && <div> {value}</div>}
    </>
  )
}

export default AxInput
