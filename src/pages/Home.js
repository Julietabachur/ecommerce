import ItemListContainer from "../Components/ItemListContainer/ItemListContainer"
import "./Home.sass"


const Home = () => {
  return (
    <div>
        <h1 className="d-flex flex-row justify-content-center m-2 display-1">Bienvenidos a mi tienda!</h1>
        <ItemListContainer />
    </div>
  )
}

export default Home
