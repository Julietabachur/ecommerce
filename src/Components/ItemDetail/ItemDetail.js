import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.sass"
import {CartContext} from "../../Context/CartContext"
import { useContext } from "react"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,imagenPrincipal,imagenes,stock,description} = dataProducts

  const { quantitySelected, setQuantitySelected} = useContext(CartContext);

  return (         
        <div key={id} className="d-flex flex-row align-items-center justify-content-around m-5 contenedor-detail">   
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={`/${imagenPrincipal}`}  className="foto-principal" alt="no disponible"/>   
            <div className="d-flex flex-row justify-content-around fotos m-3"> 
              {/* {
                imagenes.forEach((image) =>{    
                  return (   
                  <img src={`/${image}`} className="foto-secundaria" alt="no disponible"/>
                  )
                })              
              }  */}
            </div>               
          </div>           
          <div className=" d-flex flex-column align-items-center justify-content-around border border-3 rounded-3 p-5">
            <h2 className="display-1 m-2">{title}</h2>
            <p className="info d-flex justify-content-center lead text-center">{description}</p>
            <div className="d-flex flex-row align-items-center justify-content-around w-100">
              <span className="fw-semibold">Stock: {stock}</span>
              <span className="fw-semibold">Precio: ${price}</span>
            </div>
            {quantitySelected > 0 ? <Link to="/cart"><button>TERMINAR MI COMPRA</button></Link> : <ItemCount setQuantitySelected={setQuantitySelected} productData={dataProducts}/>}            
          </div>
          
        </div>            
  )
}

export default ItemDetail