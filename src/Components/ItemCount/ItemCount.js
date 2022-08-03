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

    <Link to={`/productos/${id}`}>
        <div className="card col w-25 align-items-center m-1 p-2 justify-content-around flex-wrap">
            <img src={`img/${image}`} alt="Imagen producto"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <div className="d-flex justify-content-s my-5">
                <button onClick={onRemove} className="btn btn-outline-danger h-1 border-3 rounded-5">-</button>
                <p className="m-3">{contador}</p>
                <button onClick={onAdd} className="btn btn-outline-danger border-3 rounded-5">+</button>
            </div>
            <button className="btn btn-outline-danger">COMPRAR</button>
        </div>
    </Link>
    
    
  )
}

export default ItemCount