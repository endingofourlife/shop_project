import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.sass'

export default function CategoryCard({category}) {
  const link = `/category/${category}`;
  return (
    <Link className={s.card} to={link}><p>{category}</p></Link>
  )
}
