import Item from "../Item/Item"
import "./ItemList.sass"


const ItemList = ({dataProducts}) => {
  return (
    <div className="d-flex flex-row justify-content-center m-3 flex-wrap">
        { dataProducts.map( (product)=>{return <Item key={product.id} dataProduct={product}/>})}
    </div>
  )
}

export default ItemList