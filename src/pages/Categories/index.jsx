import React from 'react'
import {useState, useEffect} from 'react';
import CategoryCard from '../../components/CategoryCard';

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
      .then(resp => resp.json())
      .then(data => setCategories(data))
  });

  // до загрузки данных выводить сообщение "Категории грузятся"

  return (
    categories.length === 0 
    ? <p>Категории грузятся</p>
    : <div>
      {
        categories.map(
            category => <CategoryCard 
                          key={category} 
                          category={category}
                        />
        )
      }
    </div>
  )
}

// по URN /product/<id> отображать ProductDescription