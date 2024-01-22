import {Routes, Route} from 'react-router-dom';
import './style.sass'

import Nav from '../Nav'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Categories from '../../pages/Categories'
import NotFound from '../../pages/NotFound'
import Products from '../../pages/Products'
import Layout from '../Layout';
import ProductDescription from '../../pages/ProductDescription';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='categories' element={<Categories />}/>
          <Route path='category/:category' element={<Products />}/>
          <Route path='product/:id' element={<ProductDescription />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;