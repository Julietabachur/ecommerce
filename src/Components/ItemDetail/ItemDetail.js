import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.sass"
import {CartContext} from "../../Context/CartContext"
import { useContext} from "react"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,imagenes,stock,description} = dataProducts

  const { quantitySelected, setQuantitySelected} = useContext(CartContext);

  return (         
        <div key={id} className="d-flex flex-row flex-wrap align-items-center justify-content-around m-5 contenedor-detail">   

          <div id="carouselExampleControls" class="carousel slide carousel-fade w-50 d-flex justify-content-center align-items-center" data-bs-ride="carousel">
            <div class="carousel-inner d-flex justify-content-center align-items-center">
            { imagenes && 
              imagenes.length > 0 && imagenes.map((image, index) =>(    
                <div class="carousel-item active ">
                  <img src={`/${image}`} key={index} className="foto-secundaria d-block w-50 " alt=""/>
                </div>
              ))              
            }        
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>                  
          <div className=" d-flex flex-column align-items-center justify-content-center border border-3 rounded-3 p-5 h-100">
            <h2 className="display-3 m-2 text-center">{title}</h2>
            <p className="info d-flex justify-content-center lead text-center my-3">{description}</p>
            <div className="d-flex flex-row align-items-center justify-content-around w-50">
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