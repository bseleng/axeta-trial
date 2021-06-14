import React from 'react'
import AtmHeading from '../../Atoms/AtmHeading/AtmHeading'
import AtmSectionContent from '../../Atoms/AtmSection/AtmSectiion'

const MolSection = ({ text, content, type }) => {
  return (
    <section>
      <AtmHeading text={text} />
      <AtmSectionContent content={content} type={type} />
    </section>
  )
}
