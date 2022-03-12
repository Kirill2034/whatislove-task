import React from 'react';
import {Routes, Route } from 'react-router-dom';
import {Login} from './pages/Login/Login';
import {Layout} from './components/Layout/Layout';
import {Products} from './pages/Products';
import  {Product}  from './pages/Products/Product';
import {News} from './pages/News';
import {Tidings} from './pages/News/Tidings';
import {About} from './pages/About/About';

 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:productId" element={<Product />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/news/:newsId" element={<Tidings />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
