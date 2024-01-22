import React from 'react'
import classes from './index.module.css'
import logo from "../../pictures/logo.png"
import cardIcon from "../../pictures/icons-shopping_bag.png"

export default function index() {

  return (
      <div className={classes.headerContainer}>
          <div className={`${classes.logo}`}>
              <img src={logo} alt="logo"/>
          </div>
          <div className={`${classes.links} ${classes.navigation}`}>
              <div>Home</div>
              <div>All products</div>
              <div>All sales</div>
          </div>
          <div className={`${classes.card}`}>
              <img src={cardIcon} alt="card"/>
          </div>
      </div>
  )
}
