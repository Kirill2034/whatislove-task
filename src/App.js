import React from 'react';
import {Routes, Route } from 'react-router-dom';
import {Login} from './pages/Login/Login';
import {Products} from './pages/Products';
import {About} from './pages/About/About';
import {Blog} from './pages/Blog/Blog';
import {Layout} from './components/Layout/Layout';
import  {Product}  from './pages/Product/';
 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:productId" element={<Product />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
