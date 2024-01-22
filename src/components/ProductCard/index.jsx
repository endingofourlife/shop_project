import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.sass'

// id, category, description, image, price, rating, title

export default function ProductCard({id, title, image}) {
  const link = `/product/${id}`;

  return (
    <Link className={s.card} to={link}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
    </Link>
  )
}



