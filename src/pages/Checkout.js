import Cart from '../Components/Cart/Cart';
import "./Checkout.sass"
import {CartContext} from "../Context/CartContext"
import { useContext } from "react"


const Checkout = () => { 

  const { totalProducts} = useContext(CartContext);

  return (
          <div className='mb-5'>
            <div className=" d-flex align-items-center justify-content-center display-1 m-5">Checkout</div>
            <Cart/>
          </div>
   )
}

export default Checkout