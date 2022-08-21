import ItemList from "../ItemList/ItemList";
import  "./ItemListContainer.sass";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore";
import db  from "../../firebaseConfig";


const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])

  const {category} = useParams()

  const getProducts= async () => {
    const productCollection = collection(db ,'productos')
    const productSnapshot =  await getDocs(productCollection)
    const productList = productSnapshot.docs.map((doc)=>{
      let product = doc.data()
      product.id = doc.id
      return product
    })    
    return productList
  }

  useEffect(() => {
    getProducts() 
      .then(  (res) =>{
        setListProducts(res)
     }
  )},[])

  const tituloLista = category === undefined ? "Productos" : category

  return (
    <div className="d-flex flex-column justify-content-center flex-wrap">
        <h1 className="display-1 d-flex justify-content-center">{`${tituloLista}`}</h1>
        <ItemList dataProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer