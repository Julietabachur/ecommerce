import CartWidget from '../CartWidget/CartWidget';
import './NavBar.sass';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav p-3">
        <div className="container-fluid">
            <a className="navbar-brand" >Dolce Julieta</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><CartWidget/></a>
                    </li>                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar