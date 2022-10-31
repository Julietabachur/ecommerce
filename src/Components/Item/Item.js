import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.sass"
import {CartContext} from "../../Context/CartContext"
import { useContext } from "react"

const Item = ({dataProduct}) => {

    const {title, price, imagenes, id} = dataProduct
    const {setQuantitySelected} = useContext(CartContext);

  return (    
        <div className="card flex-col align-items-center m-4 p-2 justify-content-between flex-wrap border-1 rounded-3">
            <Link to={`/productos/${id}`} className="linkItem" >
                <img src={`${imagenes[0]}`} alt="Imagen producto"/>
                <p className="fw-semibold">{title}</p>
            </Link>            
            <span className="fw-bold">$ {price}</span>  
            <ItemCount setQuantitySelected={setQuantitySelected} productData={dataProduct}/>   
        </div>
  )
}

export default Item