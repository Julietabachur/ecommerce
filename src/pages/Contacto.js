import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./Contacto.sass"

const Contacto = () => {
  return (
    <div className=" d-flex flex-column align-items-center ">
        <h1 className="d-flex flex-row justify-content-center m-2 display-1">Contacto</h1>
        <div className="m-3 d-flex flex-column align-items-start justify-content-center">
            <h2 className="d-flex flex-row justify-content-center m-2 display-5">Seguinos en nuestras redes y contactate con nosotros!</h2>
            <div className="m-3 d-flex flex-column align-items-center justify-content-center">              
              <p className="m-4 justify-content-center"><a href="wa.me/message/62F5GOV6W3RBA1"  target="_blank"><BsWhatsapp className="wpp"/></a> Envianos tu pedido por wpp! </p> 
              <p className="m-4 justify-content-center"><a href="https://www.instagram.com/dolcejulieta.patisserie/" target="_blank"><BsInstagram className="ig"/></a> Seguinos en Instagram y enterate de todas las novedades! </p>
            </div>
        </div>
    </div>
  )
}

export default Contacto
