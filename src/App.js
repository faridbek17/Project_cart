import React, { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Modal from './components/Modal'

function App() {
  const initialProducts = [
    {
      id: 1,
      name: 'Basic Tee',
      color: 'Black',
      price: 35,
      img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
    },
    {
      id: 2,
      name: 'Basic Tee',
      color: 'Black',
      price: 35,
      img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg'
    },
    {
      id: 3,
      name: 'Basic Tee',
      color: 'Black',
      price: 35,
      img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg'
    },
    {
      id: 4,
      name: 'Basic Tee',
      color: 'Black',
      price: 35,
      img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg'
    }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [cartProducts, setCartProducts] = useState([])


  function addToCard(product){
    if(cartProducts.length === 0){
      setCartProducts([...cartProducts, {...product, qty: 1}])
    }else{
      let bool = cartProducts.every(item => item.id === product.id ? true : false)
      if (bool){
        setCartProducts(  cartProducts.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : {...product, qty: 1}))
      }else{
        setCartProducts([...cartProducts, {...product, qty: 1}])
      }
    }
  }

  function removeToCart(id){
    setCartProducts(cartProducts.filter(item => item.id !== id))
  }

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Products products={initialProducts} addToCard={addToCard}/>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartProducts={cartProducts}
        removeToCart={removeToCart}
        />
    </div>
  )
}

export default App