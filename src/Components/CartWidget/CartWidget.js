import './CartWidget.sass' ;
import { TbShoppingCart } from "react-icons/tb";
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"


const CartWidget = () => {
  const { totalProducts, cartProducts} = useContext(CartContext);
  return (
    <div className='d-flex flex-row'>
      { cartProducts.length !== 0 && 
      <>
      <p>{totalProducts}</p> <TbShoppingCart size={20}/>
      </>
      }    
    </div>         

  )
}

export default CartWidget