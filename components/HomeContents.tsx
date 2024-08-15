import React from 'react'
import classes from './HomeContents.module.css';

const HomeContents = () => {
  return (
    <div className={classes.home_contents}>
      <div className={classes.content1}>
          <img src='/Renovation.png' alt='icon' className={classes.content_icon} />
        <span className={classes.br}>住宅内装</span>
        <span className={classes.br}>リフォーム工事</span>
      </div>
      <div className={classes.content2}>
        <img src='/Renovation2.png' alt='icon' className={classes.content_icon} />
        店舗改装
      </div>
      <div className={classes.content3}>
        <img src='/brickblock.png' alt='icon' className={classes.content_icon} />
        外構工事
      </div>
      <div className={classes.content4}>
        <img src='/breakdown.png' alt='icon' className={classes.content_icon} />
        水廻り工事
      </div>
    </div>
  )
}

export default HomeContents
