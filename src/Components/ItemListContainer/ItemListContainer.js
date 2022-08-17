import ItemList from "../ItemList/ItemList";
import products from "../Utils/products.mock";
import  "./ItemListContainer.sass";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])

  const {category} = useParams()

  const filterByCategory = products.filter( (product)=> product.category === category)

  const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () => {
          if(category === "Tortas" || category === "Postres" || category === "Alfajores" || category === "Salado") {
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
  }, [category])

  const tituloLista = category === undefined ? "Productos" : category

  return (
    <div className="d-flex flex-column justify-content-center flex-wrap">
        <h1 className="display-1 d-flex justify-content-center">{`${tituloLista}`}</h1>
        <ItemList dataProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer