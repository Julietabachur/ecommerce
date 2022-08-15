import { useState, useContext } from "react";
import "./ItemCount.sass";
import {CartContext} from "../../../Context/CartContext"

const ItemCount = ({setQuantitySelected }) => {


    const [countQuantity, setCountQuantity] = useState(1)

    function addToCart(e) {
        e.preventPropagation()
        setQuantitySelected(countQuantity)
    }

    function addQuantity() {
        setCountQuantity(countQuantity+1)
    }

    function removeQuantity() {
       setCountQuantity(countQuantity-1)
    }


  return (            
            <div className="d-flex justify-content-center flex-column my-2">
                <div className="d-flex justify-content-center flex-row my-2">
                    <button onClick={removeQuantity} className="btn h-1 border-3 rounded-5">-</button>
                    <p className="m-3">{countQuantity}</p>
                    <button onClick={addQuantity} className="btn border-3 rounded-5">+</button>
                </div>
                <button className="btn" onClick={addToCart}>AGREGAR AL CARRITO</button>
            </div>
  )
}

export default ItemCount