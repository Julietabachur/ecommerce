import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.sass"
import {CartContext} from "../../Context/CartContext"
import { useContext, useState } from "react"
import Modal from "../Modal/Modal"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,imagenes,stock,description} = dataProducts

  const [showModal, setShowModal] = useState(false)

  const { quantitySelected, setQuantitySelected} = useContext(CartContext);

  return (         
        <div key={id} className="d-flex flex-row flex-wrap align-items-start justify-content-around m-5 contenedor-detail">   
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={`/${imagenes[0]}`} onClick={()=> setShowModal(true)} className="foto-principal" alt="no disponible"/>   
            <div className="d-flex flex-row justify-content-around fotos m-3"> 
              { imagenes && 
                imagenes.length > 0 && imagenes.map((image, index) =>(    
                  <img src={`/${image}`} key={index} className="foto-secundaria" alt=""/>
                ))              
              } 
            </div>               
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
          {
            showModal &&

          <Modal title="Fotos del producto" close={()=>setShowModal()}>
            <div className="modal" tabindex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div className="carousel-inner">
                        { imagenes && 
                          imagenes.length > 0 && imagenes.map((image, index) =>(    
                            <div className="carousel-item active">
                              <img src={`/${image}`} key={index} className="d-block w-100" alt=""/>
                            </div>
                          ))              
                        }
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </Modal>
          }
        </div>            
  )
}

export default ItemDetail