import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts]=useState([])
    
    const [countQuantity, setCountQuantity] = useState(1)


    const addToCart=(product)=>{

        const productIndex = cartProducts.findIndex( (productInCart) => productInCart.id === product.id)

        if (productIndex === -1) {
            setCartProducts([...cartProducts, product]);
        } else {
        const cartProductsCopy = [...cartProducts];
        cartProductsCopy[productIndex].countQuantity =
        cartProductsCopy[productIndex].countQuantity + product.countQuantity;
            setCartProducts(cartProductsCopy);
        }
    }

    const clear=()=>{
        setCartProducts([])
    }

    const removeFromCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id);
        setCartProducts(newCart);
      };


    const data = {cartProducts, addToCart, clear, removeFromCart,countQuantity,setCountQuantity}
  return (
    <CartContext.Provider value={data} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
