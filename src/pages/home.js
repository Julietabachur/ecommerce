import ItemListContainer from "../Components/ItemListContainer/ItemListContainer"
import "./Home.sass"


const Home = () => {
  return (
    <div>
        <h1 className="d-flex flex-row justify-content-center m-2">Bienvenidos a mi tienda!</h1>
        {/* <div id="carouselExampleIndicators" className="carousel slide d-flex justify-content-center" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active  d-flex justify-content-center">
              <img src="img/pan.jpg" className="" alt="..."/>
            </div>
            <div className="carousel-item d-flex justify-content-center">
              <img src="img/portada.jpg" className="" alt="..."/>
            </div>
            <div className="carousel-item d-flex justify-content-center">
              <img src="img/recetas.jpg" className="" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <ItemListContainer />
    </div>
  )
}

export default Home