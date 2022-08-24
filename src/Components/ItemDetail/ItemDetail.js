import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.sass"
import {CartContext} from "../../Context/CartContext"
import { useContext } from "react"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,imagenPrincipal,imagenes,stock,description} = dataProducts

  const { quantitySelected, setQuantitySelected} = useContext(CartContext);

  return (         
        <div key={id} className="d-flex flex-row flex-wrap align-items-center justify-content-around m-5 contenedor-detail">   
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={`/${imagenPrincipal}`}  className="foto-principal" alt="no disponible"/>   
            <div className="d-flex flex-row justify-content-around fotos m-3"> 
              { imagenes && 
                imagenes.length > 0 && imagenes.map((image, index) =>{    
                  <img src={`/${image}`} key={index} className="foto-secundaria" alt="no disponible"/>
                })              
              } 
            </div>               
          </div>           
          <div className=" d-flex flex-column align-items-center justify-content-around border border-3 rounded-3 p-5 h-100">
            <h2 className="display-1 m-2 text-center">{title}</h2>
            <p className="info d-flex justify-content-center lead text-center my-3">{description}</p>
            <div className="d-flex flex-row align-items-center justify-content-around w-75">
              <span className="fw-semibold">Stock: {stock}</span>
              <span className="fw-semibold">Precio: ${price}</span>
            </div>
            {quantitySelected > 0 ? 
            <div className="d-flex flex-column align-items-center justify-content-around p-3">
              <ItemCount setQuantitySelected={setQuantitySelected} productData={dataProducts}/>
              <Link to="/cart"><button className="botones">TERMINAR MI COMPRA</button></Link>
            </div>
             : <ItemCount setQuantitySelected={setQuantitySelected} productData={dataProducts}/>}            
          </div>
          
        </div>            
  )
}

export default ItemDetail