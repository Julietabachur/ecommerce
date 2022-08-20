import React from 'react'
import { IoTrash } from 'react-icons/io5';
import { BsCartCheck } from 'react-icons/bs';
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"
import './Cart.sass'
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cartProducts, removeFromCart, clear} = useContext(CartContext)

    const handleRemoveItem =(id)=>{
      removeFromCart(id)
      console.log(cartProducts);
    }


  return (
    <>
        <div className="d-flex flex-column align-items-center justify-content-start  p-5">
          {cartProducts.map((product)=>{
              return (
              <div key={product.id} className="d-flex flex-row w-100 justify-content-evenly m-3 border border-3 border-dark carrito ">
                  <img src={product.image} alt="no disponible"/>
                  <div className="d-flex flex-row justify-content-around align-items-center w-100 flex-wrap">
                    <p className='fs-3' >{product.title}</p>
                    <p className='fs-3' >U:${product.price}</p>
                    <p className='fs-3' >Cantidad: {product.quantity}</p>
                    <p className='fs-3'> Total por producto: ${product.price*product.quantity}</p>
                    <button className="d-flex flex-row justify-content-center align-items-center botones border border-light border-4 rounded-3" onClick={()=>handleRemoveItem(product.id)}><IoTrash/>Eliminar producto</button>                      
                  </div>
              </div>)
              })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {cartProducts.length !== 0 ? 
          <div className="d-flex flex-row w-100 justify-content-evenly">
            <button className="agregarProductos d-flex flex-row justify-content-center align-items-center border-4 rounded-3" onClick={clear}><IoTrash/>Vaciar carrito</button> 
            <Link to={"/"} className="agregarProductos d-flex flex-row justify-content-center align-items-center border-4 rounded-3">Seguir comprando!</Link> 
            <button className="agregarProductos d-flex flex-row justify-content-center align-items-center border-4 rounded-3"><BsCartCheck/>Finalizar compra</button> 
          </div>          
          :
          <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="d-2">Tu carrito esta vacío</p> 
          <Link to={"/"} className="agregarProductos">Agregar productos</Link> 
          </div>
          }
        </div>
    </>
  )
}

export default Cart