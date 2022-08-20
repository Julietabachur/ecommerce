import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../Utils/products.mock";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
  const [productData, setProductData] = useState({})


  const {id} = useParams() //devuelve string

  const filterById = products.find (product => product.id === Number(id) )

  console.log(filterById);


  const getProduct = () => new Promise( (resolve, reject) => {
    setTimeout( () => {resolve(filterById)}, 0)})

  useEffect(() => {    
    getProduct()
      .then( (res) => {setProductData(res)})
      .catch( (error) => {console.log("la llamada fallo")})
}, [])


  return (
        <ItemDetail dataProducts={productData}/>            
)
}

export default ItemDetailContainer