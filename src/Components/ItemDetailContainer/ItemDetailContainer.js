import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../Utils/products.mock";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
  const [productData, setProductData] = useState({})

  const {id} = useParams()

  const filterById = () => { 
    products.some ( (product) => {
    if(product.id == id) {
      setProductData(product)}
    })
  }

  useEffect(() => {
     filterById()
  }, [])

  return (
        <ItemDetail dataProducts={productData} initial={1}/>            
)
}


export default ItemDetailContainer