import NavBar from '../NavBar/NavBar'
import './Footer.sass'
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='d-flex flex-row justify-content-around align-items-center'>   
       <div className="d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Tortas"}>Tortas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Alfajores"}>Alfajores</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Salado"}>Salado</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Postres"}>Postres</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/contacto"} className="nav-link">Contacto</Link>
                </li>               
            </ul>
        </div>
        <div>   
            <p className='fw-bold fs-3'>Dolce Julieta</p>
            <p> <span className='fw-bold fs-4'>Ubicacion: </span>Villa Pueyrredon, CABA.</p>
            <p></p>
        </div>
        <div className='redes'>   
            <p  className='fs-3'>Seguinos</p>
            <div className='d-flex justify-content-between'>  
                <a href="wa.me/message/62F5GOV6W3RBA1"  target="_blank" className='logos'><BsWhatsapp/></a>
                <a href="https://www.instagram.com/dolcejulieta.patisserie/" target="_blank" className='logos'><BsInstagram/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer