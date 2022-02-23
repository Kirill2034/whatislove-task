import React from 'react';
import {Routes, Route } from 'react-router-dom';
import {Login} from './pages/Login/Login';
import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
import {Blog} from './pages/Blog/Blog';
import {Layout} from './components/Layout/Layout';
 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
