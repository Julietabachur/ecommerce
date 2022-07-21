import { useState } from "react"
import "./ItemCount.sass"

const ItemCount = ({stock, initial, onAdd , onRemove}) => {

    const [contador, setContador] = useState(initial)

    function onAdd() {
        contador < stock && setContador(contador+1)
    }

    function onRemove() {
        contador > initial && setContador(contador-1)
    }


  return (
    
    <div className="card col w-25 align-items-center m-5 p-5">
        <p>Producto</p>
        <img src={`img/DSC_3586web.jpg`} alt="Imagen producto"/>
        <div className="d-flex justify-content-s my-5">
            <button onClick={onRemove} className="btn btn-outline-danger h-1 border-3 rounded-5">-</button>
            <p className="m-3">{contador}</p>
            <button onClick={onAdd} className="btn btn-outline-danger border-3 rounded-5">+</button>
        </div>
        <button className="btn btn-outline-danger">COMPRAR</button>
    </div>
  )
}

export default ItemCount