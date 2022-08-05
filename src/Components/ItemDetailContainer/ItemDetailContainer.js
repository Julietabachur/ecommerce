import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../Utils/products.mock";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
  const [productData, setProductData] = useState({})

  const {id} = useParams()

  const filterById = () => { products.some ((product) => {
    if(product.id == id) {
       return product }
    })
  }

  const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () => {

          if(id){
              resolve(filterById)
          } else {
            resolve(products)
          }
      }, 200)
  })

  useEffect(() => {
      getProducts
        .then( (res) => {setProductData(res)})
        .catch( (error) => {console.log("la llamada fallo")})
  }, [])

  return (
        <ItemDetail dataProducts={productData} initial={1}/>            
)
}


export default ItemDetailContainer