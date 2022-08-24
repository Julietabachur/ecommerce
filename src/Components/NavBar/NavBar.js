import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.sass';
import {CartContext} from "../../Context/CartContext"
import { useContext } from "react"

const NavBar = () => {

const {totalProducts} = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg nav p-3">
        <div className="container-fluid">
            <Link to={"/"} className="navbar-brand" >Dolce Julieta</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item d-flex justify-content-center align-items-center">
                        <Link to={"/"} className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn"><Link to={"/"} className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link></button>
                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/category/Tortas"}>Tortas</Link></li>
                                <li><Link className="dropdown-item" to={"/category/Alfajores"}>Alfajores</Link></li>
                                <li><Link className="dropdown-item" to={"/category/Salado"}>Salado</Link></li>
                                <li><Link className="dropdown-item" to={"/category/Postres"}>Postres</Link></li>
                            </ul>
                        </div>
                    </li>  
                    <li className="nav-item d-flex justify-content-center align-items-center">
                        <Link to={"/contacto"} className="nav-link">Contacto</Link>
                    </li>
                    <li className="nav-item d-flex justify-content-center align-items-center">
                        <Link to={"/Cart"}  className="nav-link d-flex justify-content-center align-items-center"><CartWidget/></Link>
                    </li>            
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar