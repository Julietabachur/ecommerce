import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../Utils/products.mock";
import { useEffect, useState } from "react"


const ItemDetailContainer = () => {
    
  const [listProduct, setListProduct] = useState([])

  const getProduct = new Promise( (resolve, reject) => {
      setTimeout( () => {resolve(products[0])}, 2000)})

  useEffect(() => {
      getProduct
        .then( (res) => {setListProduct(res)})
        .catch( (error) => {console.log("la llamada fallo")})
  }, [])

  return (
        <ItemDetail dataProducts={listProduct}/>            
)
}


export default ItemDetailContainer