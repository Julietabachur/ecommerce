import './CartWidget.sass' ;
import { TbShoppingCart } from "react-icons/tb";
import { IoTrash } from 'react-icons/io5';
import { BsCartCheck } from 'react-icons/bs';
import { useContext, useState } from "react"
import {CartContext} from "../../Context/CartContext"
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';


const CartWidget = () => {

  const { totalProducts, cartProducts, removeFromCart, clear} = useContext(CartContext);

  const [showModal, setShowModal] = useState(false)

  const handleRemoveItem =(id)=>{
    removeFromCart(id)
  }

  return (
    
      <div className='d-flex justify-content-center align-items-center'>

        { cartProducts.length !== 0 &&               
       
          <div className="btn-group dropstart">
            <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <p className='d-flex justify-content-center align-items-center'>{totalProducts}<TbShoppingCart size={20} onClick={()=>setShowModal(true)}/></p>
            </button>
            <ul className="dropdown-menu">
            {showModal && 
          
              <Modal title="Carrito" close={setShowModal} className="modal-custom">
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
            </ul>
          </div>
       }           
      </div>         
    
  )
}

export default CartWidget