import "./ItemDetail.sass"

const ItemDetail = ({dataProducts}) => {
  
  const {id,title,price,image,image1,image2,image3} = dataProducts
  
  return (         
        <div key={id} className="d-flex flex-row align-center justify-content-around">   
          <div className="d-flex flex-column justify-content-center align-center">
            <img src={image}  className="foto-principal"/>   
            <div className="d-flex flex-row justify-content-between fotos">
              <img src={image1} className="foto-secundaria"/>
              <img src={image2} className="foto-secundaria"/>
              <img src={image3} className="foto-secundaria"/>
            </div>               
          </div>           
          <div className="info d-flex flex-column align-center justify-content-around">
            <h2>{title}</h2>
            <span>$ {price}</span>
          </div>
        </div>            
  )
}

export default ItemDetail