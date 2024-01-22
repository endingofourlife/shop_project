import React from 'react'
import {Outlet} from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav'
import s from './style.module.sass'

export default function Layout() {
  return (
    <>
        <Nav />
        <div className={s.main_content}>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}
