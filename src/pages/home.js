import ItemListContainer from "../Components/ItemListContainer/ItemListContainer"


const Home = () => {
  return (
    <div>
        <h1 className="d-flex flex-row justify-content-center m-5">Bienvenidos a mi tienda!</h1>
        <div id="carouselExampleIndicators" className="carousel slide w-75 h-50 d-flex justify-content-center" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/pan.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..."/>
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
        </div>
        <ItemListContainer />
    </div>
  )
}

export default Home