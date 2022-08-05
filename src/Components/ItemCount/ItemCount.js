import { useState } from "react"
import { Link } from "react-router-dom"
import "./ItemCount.sass"

const ItemCount = ({data, initial, onAdd , onRemove}) => {

    const {title, price, image, stock, id} = data

    const [contador, setContador] = useState(initial)

    function onAdd() {
        contador < stock && setContador(contador+1)
    }

    function onRemove() {
        contador > initial && setContador(contador-1)
    }


  return (    
        <div className="card flex-col align-items-center m-4 p-2 justify-content-between flex-wrap">
            <Link to={`/productos/${id}`} >
                <img src={`/${image}`} alt="Imagen producto"/>
                <p className="fw-bold">{title}</p>
            </Link>            
            <span className="fw-bold">$ {price}</span>
            <div className="d-flex justify-content-center my-2">
                <button onClick={onRemove} className="btn h-1 border-3 rounded-5">-</button>
                <p className="m-3">{contador}</p>
                <button onClick={onAdd} className="btn border-3 rounded-5">+</button>
            </div>
            <Link to={`/productos/${id}`}>
                <button className="btn">COMPRAR</button>
            </Link>            
        </div>
  )
}

export default ItemCount