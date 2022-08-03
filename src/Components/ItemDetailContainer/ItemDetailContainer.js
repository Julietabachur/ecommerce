import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../Utils/products.mock";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
  const [listProduct, setListProduct] = useState([])

  const {id} = useParams()

  const getProduct = new Promise( (resolve, reject) => {
      setTimeout( () => {resolve(products)}, 2000)})

  useEffect(() => {
      getProduct
        .then( (res) => {setListProduct(res)})
        .catch( (error) => {console.log("la llamada fallo")})
  }, [])

  return (
        <ItemDetail dataProducts={listProduct} initial={1}/>            
)
}


export default ItemDetailContainer