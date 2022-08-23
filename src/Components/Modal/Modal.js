import "./Modal.sass"
import { RiCloseLine } from "react-icons/ri";

import React from 'react'

const Modal = (title, close, children) => {
  return (
    <div>
        <h2>{title}</h2>
        <RiCloseLine/>
        {children}
    </div>
  )
}

export default Modal