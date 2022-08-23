import React from 'react'
import { IoTrash } from 'react-icons/io5';
import { BsCartCheck } from 'react-icons/bs';
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"
import './Cart.sass'
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cartProducts, removeFromCart, clear, totalPrice} = useContext(CartContext)

    const handleRemoveItem =(id)=>{
      removeFromCart(id)
    }


  return (
    <>
        <div className="d-flex flex-column align-items-center justify-content-start m-5">
          {cartProducts.map((product)=>{
             const {title, imagenPrincipal, price, id, quantity} = product
              return (
              <div key={id} className="d-flex flex-row w-100 justify-content-evenly carrito p-3">
                <Link to={"/productos/:id"} ><img src={imagenPrincipal} alt="no disponible" className='imagenCart'/></Link>
                  <div className="d-flex flex-row justify-content-around align-items-center w-100 flex-wrap">
                    <Link to={"/productos/:id"}><p className='fs-4'>{title}</p></Link>                    
                    <p className='fs-4'>Precio: ${price}</p>
                    <p className='fs-4'>Subtotal: ${price*quantity}</p>
                    <button className="d-flex flex-row justify-content-center align-items-center botones border-4 rounded-3" onClick={()=>handleRemoveItem(product.id)}><IoTrash/>Eliminar producto</button>                      
                  </div>
              </div>)
              })
          }
        </div>
        <div>
          
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {cartProducts.length !== 0 ? 
          <div className="d-flex flex-column w-100 justify-content-evenly align-items-center">
            <p className='fs-4 m-3 precio'>Precio final: ${totalPrice}</p>
            <div className="d-flex flex-row w-100 justify-content-evenly align-items-center">
              <button className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3" onClick={clear}><IoTrash/>Vaciar carrito</button> 
              <Link to={"/"} className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3">Seguir comprando!</Link> 
              <button className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3"><BsCartCheck/>Finalizar compra</button> 
            </div>
          </div>          
          :
          <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="d-2">Tu carrito esta vacío</p> 
          <Link to={"/"} className="botones">Agregar productos</Link> 
          </div>
          }
        </div>
    </>
  )
}

export default Cart