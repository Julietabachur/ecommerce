import { useContext, useState } from "react"
import "./ItemCount.sass"
import {CartContext} from "../../Context/CartContext"

const ItemCount = ({setQuantitySelected, productData }) => {
    
    
    const [countQuantity, setCountQuantity] = useState(1)

    const { addToCart} = useContext(CartContext);

    const {stock}=productData

    function onAdd() {
        addToCart(productData)
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
                    <button onClick={removeQuantity} className="btn h-1 border-3 rounded-5 text-white border-white">-</button>
                    <p className="m-3 text-white">{countQuantity}</p>
                    <button onClick={addQuantity} className="btn border-3 rounded-5 text-white border-white">+</button>
                </div>
                <button className="btn text-white border-3 rounded-5 border-white" onClick={onAdd}>AGREGAR AL CARRITO</button>
            </div>
  )
}

export default ItemCount