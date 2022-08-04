import ItemCount from "../ItemCount/ItemCount"
import "./ItemList.sass"


const ItemList = ({dataProducts}) => {
  return (
    <div className="d-flex flex-row justify-content-center m-3 flex-wrap">
        { dataProducts.map( (product)=>{return <ItemCount key={product.id} data={product} initial={1}/>})}
    </div>
  )
}

export default ItemList