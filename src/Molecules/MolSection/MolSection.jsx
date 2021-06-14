import React from 'react'
import AtmHeading from '../../Atoms/AtmHeading/AtmHeading'
import AtmSectionContent from '../../Atoms/AtmSection/AtmSectionContent'
import classes from './MolSection.module.css'

const MolSection = ({ text, content, type }) => {
  return (
    <section className={classes.section}>
      <AtmHeading text={text} />
      <AtmSectionContent content={content} type={type} />
    </section>
  )
}

export default MolSection
