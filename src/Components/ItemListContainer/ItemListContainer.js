import ItemList from "../ItemList/ItemList";
import products from "../Utils/products.mock";
import  "./ItemListContainer.sass";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = ({section}) => {

  const [listProducts, setListProducts] = useState([])

  const {category} = useParams()

  const filterByCategory = products.filter( (product)=> product.category === category)

  const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () => {

          if(category){
              resolve(filterByCategory)
          } else {
            resolve(products)
          }
      }, 200)
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
    <div className="d-flex flex-row justify-content-center flex-wrap">
        <h1 className="display-1 d-flex justify-content-center">{section}</h1>
        <ItemList dataProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer