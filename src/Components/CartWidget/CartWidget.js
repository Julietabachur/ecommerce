import './CartWidget.sass' ;
import { TbShoppingCart } from "react-icons/tb";
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"


const CartWidget = () => {

  const { totalProducts, cartProducts} = useContext(CartContext);

  return (
    
      <div className='d-flex justify-content-center align-items-center'>

        { cartProducts.length !== 0 &&             
          <div className="btn-group dropstart">
            <button type="button" className="btn ">
            <p className='d-flex justify-content-center align-items-center p-0 m-0'>{totalProducts}<TbShoppingCart size={20} /></p>
            </button>            
          </div>
       }           
      </div>         
    
  )
}

export default CartWidget