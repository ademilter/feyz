import React from 'react'
import cn from 'classnames'

import styles from './sponsors.module.css'

import A from './a'

function Sposnors({ className }) {
  return (
    <div className={cn(styles.sponsors, className)}>
      <p>Sponsorlarımız</p>

      <div className={styles.logos}>
        {[
          {
            url: 'https://relevantfruit.com/',
            alt: 'relevantfruit logo',
            logo: '/assets/relevantfruit.svg'
          },
          {
            url: 'https://kommunity.com/',
            alt: 'kommunity logo',
            logo: '/assets/kommunity.svg'
          },
          {
            url: 'https://monofor.com/',
            alt: 'monofor logo',
            logo: '/assets/monofor.png'
          }
        ].map((sponsor) => {
          return (
            <A key={sponsor.url} href={sponsor.url} className={styles.sponsor}>
              <img src={sponsor.logo} alt={sponsor.alt} />
            </A>
          )
        })}
      </div>

      <p>
        <A className={styles.link} href="https://www.patreon.com/ademilter">
          Destek olmak için tıklayın
        </A>
      </p>
    </div>
  )
}

export default Sposnors
