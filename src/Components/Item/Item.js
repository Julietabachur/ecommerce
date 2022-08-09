import { Link } from "react-router-dom"
import "./Item.sass"

const Item = ({data}) => {

    const {title, price, image, id} = data

  return (    
        <div className="card flex-col align-items-center m-4 p-2 justify-content-between flex-wrap">
            <Link to={`/productos/${id}`} >
                <img src={`/${image}`} alt="Imagen producto"/>
                <p className="fw-bold">{title}</p>
            </Link>            
            <span className="fw-bold">$ {price}</span>                       
        </div>
  )
}

export default Item