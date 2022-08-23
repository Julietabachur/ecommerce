import { useContext, useState } from "react"
import "./ItemCount.sass"
import {CartContext} from "../../Context/CartContext"

const ItemCount = ({setQuantitySelected, productData }) => {    
    
    const [countQuantity, setCountQuantity] = useState(1)

    const { addToCart} = useContext(CartContext);

    const {stock}=productData

    function onAdd() {
        addToCart({...productData, quantity: countQuantity})
        setQuantitySelected(countQuantity)
    }

    function addQuantity() {
        countQuantity < stock && setCountQuantity(countQuantity + 1);
    }

    function removeQuantity() {
        countQuantity > 1 && setCountQuantity(countQuantity-1)
    }


  return (            
            <div className="d-flex justify-content-center flex-column my-2">
                <div className="d-flex justify-content-center flex-row my-2 border-3 rounded-5 border-white">
                    <button onClick={removeQuantity} className="btn botones h-1 border-3 rounded-5 ">-</button>
                    <p className="m-3 ">{countQuantity}</p>
                    <button onClick={addQuantity} className="btn botones border-3 rounded-5 ">+</button>
                </div>
                <button className="btn botones border-3 rounded-5" onClick={onAdd}>AGREGAR AL CARRITO</button>
            </div>
  )
}

export default ItemCount