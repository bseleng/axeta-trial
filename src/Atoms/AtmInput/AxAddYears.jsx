import React from 'react'

const AxAddYears = ({ inputTargetStyle, value }) => {
  if (inputTargetStyle === 'skillDuration') {
    if (parseInt(value) > 1) {
      return <span> years</span>
    } else {
      return <span> year</span>
    }
  } else {
    return null
  }
}

export default AxAddYears
