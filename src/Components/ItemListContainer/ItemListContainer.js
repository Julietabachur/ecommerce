import ItemList from "../ItemList/ItemList";
import  "./ItemListContainer.sass";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import db  from "../../firebaseConfig";

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])
  const {category} = useParams()

  useEffect(()=>{
    const queryCollection = collection(db,"productos")
    if (category){
        const queryFilter= query(queryCollection, where("category" , "==", category))
        getDocs(queryFilter)
        .then(res =>setListProducts (res.docs.map(product =>({id: product.id, ...product.data()}))))
    } else{
    getDocs(queryCollection)
    .then(res =>setListProducts (res.docs.map(product =>({id: product.id, ...product.data()}))))
    }
},[category])

  const tituloLista = category === undefined ? "Productos" : category

  return (
    <div className="d-flex flex-column justify-content-center flex-wrap">
        <h1 className="display-3 d-flex justify-content-center">{`${tituloLista}`}</h1>
        <ItemList dataProducts={listProducts} />
    </div>
  )
}

export default ItemListContainer