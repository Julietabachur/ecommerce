import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.sass"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,image,image1,image2,image3,stock} = dataProducts

  const [quantitySelected, setQuantitySelected] = useState(0)

   
  
  return (         
        <div key={id} className="d-flex flex-row align-items-center justify-content-between m-5 contenedor-detail">   
          <div className="d-flex flex-column justify-content-center align-items-center ms-5">
            <img src={`/${image}`}  className="foto-principal" />   
            <div className="d-flex flex-row justify-content-around fotos m-3">
              <img src={`/${image1}`} className="foto-secundaria" placeholder="no disponible"/>
              <img src={`/${image2}`} className="foto-secundaria" placeholder="no disponible"/>
              <img src={`/${image3}`} className="foto-secundaria" placeholder="no disponible"/>
            </div>               
          </div>           
          <div className=" d-flex flex-column align-items-center justify-content-around me-5">
            <h2>{title}</h2>
             <p className="info d-flex justify-content-center">El más rico y húmedo brownie con los topping que más te gustan: dulce de leche, nutella, merengue, crema chantilly, frutos rojos..</p>
            <span className="precio">$ {price}</span>
            <span className="precio">Stock: {stock}</span>
            {quantitySelected > 0 ? <Link to="/cart"><button>TERMINAR MI COMPRA</button></Link> : <ItemCount setQuantitySelected={setQuantitySelected}/>}            
          </div>
          
        </div>            
  )
}

export default ItemDetail