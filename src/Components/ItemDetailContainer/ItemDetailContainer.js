import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import  db  from "../../firebaseConfig";


const ItemDetailContainer = () => {
    
  const [productData, setProductData] = useState({})
  const {id} = useParams() //devuelve string

  const getProduct = async () =>{
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id    
    return product
  }


  useEffect(() => {    
    getProduct()
      .then( (res) => {setProductData(res)})
      .catch( (error) => {console.log("la llamada fallo")})
}, [id])


  return (
        <ItemDetail dataProducts={productData}/>            
)
}

export default ItemDetailContainer