import React from 'react'
import MolSection from '../../Molecules/MolSection/MolSection'
import { codeString } from './OrgAsideAssets'
import classes from './OrgAside.module.css'

const OrgAside = () => {
  return (
    <aside className={classes.aside}>
      <MolSection
        text={'Sample code'}
        type={'code'}
        content={[
          {
            text: codeString,
          },
        ]}
      />
      <div>
        <MolSection
          text={'Availability'}
          type={'plainText'}
          content={[
            {
              text: 'Full-time',
              separator: '',
            },
          ]}
        />
        <MolSection
          text={'Preferred Environment'}
          type={'plainText'}
          content={[
            {
              text: 'GitHub',
              separator: ', ',
            },
            {
              text: 'Mac OSX',
              separator: '',
            },
          ]}
        />
      </div>
    </aside>
  )
}
export default OrgAside
