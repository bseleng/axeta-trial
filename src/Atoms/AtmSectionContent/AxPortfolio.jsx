import React from 'react'

const AxPortfolio = ({ content, classes }) => {
  return content.map((el, index) => {
    return (
      <div className={classes.linkWrapper} key={`portfolio-${index}`}>
        <span>&#8211;</span>
        <a className={classes.portfolioLink} href={el.link}>
          {el.text}
        </a>
      </div>
    )
  })
}

export default AxPortfolio
