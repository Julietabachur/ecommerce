import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts]=useState([])
    const [quantitySelected, setQuantitySelected] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    


    // const addToCart = (product) => {

    //   const productInCart = cartProducts.find( item => item.id === product.id )
      
    //    if (productInCart){

    //    const copyArray = cartProducts.map ((item) => {
          
    //       if(item.id === product.id){
    //           return {
    //               ...item,
    //               quantity: item.quantity + product.quantity,
    //           }
    //       }         

    //      else{
    //         return item            

    //       }})
          
    //       setcartProducts(copyArray)}

    //    else{
    //       setcartProducts([...cartProducts, product])      

    //    }      
      
    //   settotalPrice(totalPrice + product.quantity * product.price)



    const addToCart=(product)=>{
        const productIndex = cartProducts.findIndex( (productInCart) => productInCart.id === product.id)

        if (productIndex === -1) {
            setCartProducts([...cartProducts, product]);
            setTotalProducts(totalProducts + product.countQuantity)
            setTotalPrice(totalPrice + product.price)
        } else {
            const cartProductsCopy = [...cartProducts];
            cartProductsCopy[productIndex].countQuantity =
            cartProductsCopy[productIndex].countQuantity + product.countQuantity;
            setCartProducts(cartProductsCopy);
            setTotalProducts(totalProducts + product.countQuantity)
        }
    }

    const clear=()=>{
        setCartProducts([])
    }

    const removeFromCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id);
        setCartProducts(newCart);
      };


    const data = {cartProducts, addToCart, clear, removeFromCart, quantitySelected, setQuantitySelected,totalProducts}
  return (
    <CartContext.Provider value={data} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
