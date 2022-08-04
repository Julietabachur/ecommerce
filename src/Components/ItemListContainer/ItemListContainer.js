import ItemList from "../ItemList/ItemList";
import products from "../Utils/products.mock";
import  "./ItemListContainer.sass";
import { useEffect, useState } from "react"

const ItemListContainer = ({section}) => {

  const [listProducts, setListProducts] = useState([])

  const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () => {
          resolve(products)
      }, 2000)
  })

  useEffect(() => {
      getProducts
          .then( (res) => { 
              setListProducts(res)
          })
          .catch( (error) => { 
              console.log("la llamada fallo")
          })
  }, [])

  return (
    <div className="d-flex flex-row flex-wrap">
        <h1 className="display-1 d-flex justify-content-center">{section}</h1>
        <ItemList dataProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer