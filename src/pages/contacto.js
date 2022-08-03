import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Contacto = () => {
  return (
    <div className=" d-flex flex-column align-items-center ">
        <h1 className="m-5">Contacto</h1>
        <div>
            <h2>Seguinos en nuestras redes y contactate con nosotros!</h2>
            <p>Hace tu pedido al <a href="wa.me/message/62F5GOV6W3RBA1"  target="_blank"><BsWhatsapp/></a></p> 
            <p>Seguinos en Instagram y enterate de todas las novedades! <a href="https://www.instagram.com/dolcejulieta.patisserie/" target="_blank"><BsInstagram/></a> </p>
        </div>
    </div>
  )
}

export default Contacto