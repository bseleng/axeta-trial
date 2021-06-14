import React from 'react'

const AxPortfolio = ({ content, classes }) => {
  return content.map((el) => {
    return (
      <div className={classes.linkWrapper}>
        <span>&#8211;</span>
        <a className={classes.portfolioLink} href={el.link}>
          {el.text}
        </a>
      </div>
    )
  })
}

export default AxPortfolio
