import { IoTrash } from 'react-icons/io5';
import { useContext } from "react"
import {CartContext} from "../Context/CartContext"
import "./Checkout.sass"


const Checkout = () => {

  const {cartProducts, removeFromCart, clear, countQuantity} = useContext(CartContext)

  return (
          <div className='mb-5'>
            <div className=" d-flex align-items-center justify-content-center display-1 m-5">Checkout</div>
            <div className="d-flex flex-column align-items-center justify-content-start  p-5">
            {cartProducts.map((product)=>{
              return (
                <div key={product.id} className="d-flex flex-row w-100 justify-content-evenly m-3 border border-3 border-dark carrito">
                  <img src={product.image} alt="no disponible"/>
                  <div className="d-flex flex-row justify-content-around align-items-center w-100">
                    <p className='fs-1' >{product.title}</p>
                    <p className='fs-1' >U:${product.price}</p>
                    <p className='fs-1' >Cantidad: {countQuantity}</p>
                    <p className='fs-1'> Total por producto: ${product.price*countQuantity}</p>
                    <button className="d-flex flex-row justify-content-center align-items-center botones border border-light border-4 rounded-3"><IoTrash onClick={removeFromCart}/>Eliminar producto</button>                      
                  </div>
                </div>)
              }              
              )}
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button className="d-flex flex-row justify-content-center align-items-center botones border border-dark border-4 rounded-3" onClick={clear}><IoTrash onClick={clear}/>Vaciar carrito</button>            
              </div>
          </div>
   )
}

export default Checkout