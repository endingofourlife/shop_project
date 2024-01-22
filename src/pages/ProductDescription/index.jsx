import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import s from './style.module.sass'

export default function ProductDescription() {

  const [product, setProduct] = useState({status: 'loading'});
  const {id} = useParams();

  // 'loading'
  // 'loaded'
  // 'error'

  useEffect(()=>{
    const handler = async ()=>{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await response.text();
  
      if (data === ''){
        console.log('ошибка!');
        setProduct({
          status: 'error'
        });
      }else{
        data = JSON.parse(data);
        setProduct({
          status: 'loaded',
          data
        });
      }
  
    };
    handler();
  }, []);

  const render = () => {
    if (product.status === 'loading'){
      return <p>Данные грузятся</p>  
    }else if (product.status === 'loaded'){
      let {image, title, category, price, description} = product.data;
      return <div className={s.card}>
        <div className={s.img_block}>
          <img src={image} alt={title} />
        </div>
        <div className={s.info_block}>
          <h2>({category}) {title}</h2>
          <p>{description}</p>
          <p>price: <span>{price}</span></p>
        </div>
      </div>
    }else if (product.status === 'error'){
      return <p>Ошибка!</p>
    }
  }

  return (
    render()
  )
}

