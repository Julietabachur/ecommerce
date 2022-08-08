import { useState } from "react"
import "./ItemDetail.sass"

const ItemDetail = ({dataProducts, initial}) => {
  
  const {id,title,price,image,image1,image2,image3,stock} = dataProducts

  const [contador, setContador] = useState(initial)

    function onAdd() {
        contador < stock && setContador(contador+1)
    }

    function onRemove() {
        contador > initial && setContador(contador-1)
    }
  
  return (         
        <div key={id} className="d-flex flex-row align-items-center justify-content-between m-5 contenedor-detail">   
          <div className="d-flex flex-column justify-content-center align-items-center ms-5">
            <img src={`/${image}`}  className="foto-principal"/>   
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
            <div className="d-flex justify-content-s my-5">
              <button onClick={onRemove} className="btn btn-outline-danger h-1 border-3 rounded-5">-</button>
              <p className="m-3">{contador}</p>
              <button onClick={onAdd} className="btn btn-outline-danger border-3 rounded-5">+</button>
            </div>
            <button className="btn btn-outline-danger">COMPRAR</button>
          </div>
          
        </div>            
  )
}

export default ItemDetail