import './CartWidget.sass' ;
import { TbShoppingCart } from "react-icons/tb";
import { IoTrash } from 'react-icons/io5';
import { BsCartCheck } from 'react-icons/bs';
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'


const CartWidget = () => {
  const { totalProducts, cartProducts, removeFromCart, clear} = useContext(CartContext);
  const [showModal, setShowModal] = useState(false)

  const handleRemoveItem =(id)=>{
    removeFromCart(id)
  }

  return (
    <>
      <div className='d-flex d-flex justify-content-center align-items-center'>
        { cartProducts.length !== 0 && 
        <p className='d-flex d-flex justify-content-center align-items-center'>{totalProducts}<TbShoppingCart size={20} onClick={()=>setShowModal(true)}/></p>      
        }    
        {showModal && 
        
          <Modal title="Carrito" close={setShowModal}>
            {cartProducts.map((product)=>{
              const {title, imagenes, price, id, quantity} = product
                return (
                <div key={id} className="d-flex flex-row w-100 justify-content-evenly carrito p-3">
                  <Link to={`/productos/${id}`}><img src={imagenes[0]} alt="no disponible" className='imagenCart'/></Link>
                    <div className="d-flex flex-row justify-content-around align-items-center w-100 flex-wrap">
                      <Link to={`/productos/${id}`}><p className='fs-4'>{title}</p></Link>                    
                      <p className='fs-4'>Precio: ${price}</p>
                      <p className='fs-4'>Subtotal: ${price*quantity}</p>
                      <button className="d-flex flex-row justify-content-center align-items-center botones border-4 rounded-3" onClick={()=>handleRemoveItem(product.id)}><IoTrash/>Eliminar producto</button>                      
                    </div>
                </div>)
                })
            }
            <div className="d-flex flex-row w-100 justify-content-evenly align-items-center">
              <button className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3" onClick={clear}><IoTrash/>Vaciar carrito</button> 
              <button className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3"><BsCartCheck/>Finalizar compra</button> 
            </div>
          </Modal>


        }
      </div>         
    </>
  )
}

export default CartWidget