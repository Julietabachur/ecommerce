import "./Modal.sass"
import { RiCloseLine } from "react-icons/ri";

import React from 'react'

const Modal = ({title, close, children}) => {
  return (

        <div className="modal-custom d-flex flex-column justify-content-start align-items-center pt-5">
            <h2>{title}</h2>
            <RiCloseLine onClick={() => close(false)}/>
            {children}
        </div>
  )
}

export default Modal