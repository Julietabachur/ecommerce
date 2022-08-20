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
      
    //   



    const addToCart=(product)=>{
        const productIndex = cartProducts.findIndex( (productInCart) => productInCart.id === product.id)

        if (productIndex === -1) {
            setCartProducts([...cartProducts, product]);
            setTotalProducts(totalProducts + product.quantity)
            setTotalPrice(totalPrice + product.price)
        } else {
            const cartProductsCopy = [...cartProducts];
            cartProductsCopy[productIndex].countQuantity =
            cartProductsCopy[productIndex].countQuantity + product.quantity;
            setCartProducts(cartProductsCopy);
            setTotalProducts(totalProducts + product.countQuantity)
        }

        setTotalPrice(totalPrice + product.quantity * product.price)
    }

    const clear=()=>{
        setCartProducts([])
        setTotalPrice(0)
        setTotalProducts(0)
        console.log(cartProducts);
    }

    const removeFromCart = (id) => {
        const newCart = cartProducts.filter((productInCart) => productInCart.id !== id);
        setCartProducts(newCart);

        const prod = cartProducts.find(product => product.id === id)
        setTotalPrice (totalPrice - prod.quantity * prod.price)
      };


    const data = {cartProducts, addToCart, clear, removeFromCart, quantitySelected, setQuantitySelected,totalProducts, totalPrice}
  return (
    <CartContext.Provider value={data} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
