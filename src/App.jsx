
import { useState } from 'react';
import './App.css'
import Bookmarks from './components/bookmarks/Bookmarks';
import Header from './components/header/Header'
import Products from './components/products/Products';

function App() {
  const [carts, setCart] = useState([]);


  const handleAddToCart = (product) => {
    const isExist = carts.find(p => p.id == product.id);
    if (!isExist) {
      setCart([...carts, product]);
    }else{
      alert('already in cart')
    }
  };

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-1 md:grid-cols-9'>
          <div className='col-span-6'> <Products
            handleAddToCart={handleAddToCart}
          ></Products></div>
          <div className='col-span-3'> <Bookmarks
          carts={carts}
          ></Bookmarks></div>
        </div>
      </div>
    </>
  )
}
export default App;