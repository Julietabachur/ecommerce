import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.sass"
import {CartContext} from "../../Context/CartContext"
import { useContext } from "react"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,imagenPrincipal,imagenes,stock,description} = dataProducts

  const { quantitySelected, setQuantitySelected} = useContext(CartContext);

  return (         
        <div key={id} className="d-flex flex-row align-items-center justify-content-between m-5 contenedor-detail">   
          <div className="d-flex flex-column justify-content-center align-items-center ms-5">
            <img src={`/${imagenPrincipal}`}  className="foto-principal" alt="no disponible"/>   
            <div className="d-flex flex-row justify-content-around fotos m-3"> 
              {
                imagenes.forEach((image) =>{    
                  return (   
                  <img src={`/${image}`} className="foto-secundaria" alt="no disponible"/>
                  )
                })              
              } 
            </div>               
          </div>           
          <div className=" d-flex flex-column align-items-center justify-content-around me-5">
            <h2>{title}</h2>
            <p className="info d-flex justify-content-center">{description}</p>
            <span className="precio">$ {price}</span>
            <span className="precio">Stock: {stock}</span>
            {quantitySelected > 0 ? <Link to="/cart"><button>TERMINAR MI COMPRA</button></Link> : <ItemCount setQuantitySelected={setQuantitySelected} productData={dataProducts}/>}            
          </div>
          
        </div>            
  )
}

export default ItemDetail