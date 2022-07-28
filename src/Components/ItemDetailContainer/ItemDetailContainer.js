import ItemDetail from "../ItemDetail/ItemDetail";
import products1 from "../Utils/products1.mock";


const ItemDetailContainer = () => {


    
  const [listProducts, setListProducts] = useState([])

  const getProducts = new Promise( (resolve, reject) => {
      setTimeout( () => {
          resolve(products1)
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
    <div>
        <ItemDetail dataProduct={setListProducts}/>        
    </div>
)
}


 

export default ItemDetailContainer