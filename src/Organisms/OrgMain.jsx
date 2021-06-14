import React from 'react'
import MolSection from '../Molecules/MolSection/MolSection'
import classes from './OrgMain.module.css'

const OrgMain = () => {
  return (
    <main className={classes.main}>
      <MolSection
        text={'Portfolio'}
        type={'portfolio'}
        content={[
          { text: 'Bootstrap 4 Material Design (Sample Link)', link: '#' },
          { text: 'Modern JavaScript stack', link: '#' },
          { text: 'Datepicker for twitter bootstrap', link: '#' },
          { text: 'Fast and reliable Bootstrap widgets in Angular', link: '#' },
        ]}
      />

      <MolSection
        text={'Experience'}
        type={'experience'}
        content={[
          { text: 'PHP', duration: '6' },
          { text: 'Ruby', duration: '2' },
          { text: 'JavaScript', duration: '4.5' },
        ]}
      />
    </main>
  )
}
export default OrgMain
