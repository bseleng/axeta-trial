import React from 'react'

const AtmSectionContent = ({ type, content }) => {
  const output = () => {
    switch (type) {
      case 'portfolio':
        return content.map((el) => {
          return (
            <a href={el.link} target="_blank">
              -{el.text}
            </a>
          )
        })
    }
  }

  return <>{output}</>
}

export default AtmSectionContent
