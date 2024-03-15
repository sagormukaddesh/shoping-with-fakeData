
import { useState } from 'react';
import './App.css'
import Bookmarks from './components/bookmarks/Bookmarks';
import Header from './components/header/Header'
import Products from './components/products/Products';
import Swal from 'sweetalert2';

function App() {
  const [carts, setCart] = useState([]);


  const handleAddToCart = (product) => {
    const isExist = carts.find(p => p.id == product.id);
    if (!isExist) {
      setCart([...carts, product]);
    } else {
      Swal.fire({
        title: "Item Already in Cart!",
        text: "Get back?",
        icon: "error"
      }); 
    }
  };

  const handleRemove = (id) => {
    const remaining = carts.filter(p => p.id !== id);
    if (remaining) {
      Swal.fire({
        title: "Want To Delete?",
        text: "Delete Permanently?",
        icon: "question"
      });  
    }
    setCart(remaining)
  }

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
            handleRemove={handleRemove}
          ></Bookmarks></div>
        </div>
      </div>
    </>
  )
}
export default App;