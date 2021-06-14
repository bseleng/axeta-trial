import React from 'react'
import { findAllByDisplayValue } from '@testing-library/react'

const AtmSectionContent = ({ type, content }) => {
  const output = () => {
    switch (type) {
      case 'portfolio':
        return content.map((el) => {
          return <div> - {el}</div>
        })
    }
  }

  return <>{output}</>
}

export default AtmSectionContent
