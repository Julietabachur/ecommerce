import React, { useState } from "react";
import { IoTrash } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.sass";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebaseConfig";

const Cart = () => {
  const { cartProducts, removeFromCart, clear, totalPrice } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [success, setSuccess] = useState();
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        subtotalPrice: product.price * product.quantity,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalPrice,
  });

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, "ordenes");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
  };

  const submitData = (e) => {
    e.preventDefault();
    pushData({ ...order, buyer: formData });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-start m-5">
        {cartProducts.map((product) => {
          const { title, imagenes, price, id, quantity } = product;
          return (
            <div
              key={id}
              className="d-flex flex-row w-100 justify-content-evenly carrito p-3 m-3"
            >
              <Link to={`/productos/${id}`}>
                <img
                  src={imagenes[0]}
                  alt="no disponible"
                  className="imagenCart"
                />
              </Link>
              <div className="d-flex flex-row justify-content-around align-items-center w-100 flex-wrap">
                <Link to={`/productos/${id}`}>
                  <p className="fs-4">{title}</p>
                </Link>
                <p className="fs-4">Cant.: {quantity}</p>
                <p className="fs-4">Precio: ${price}</p>
                <p className="fs-4">Subtotal: ${price * quantity}</p>
                <button
                  className="d-flex flex-row justify-content-center align-items-center botones border-4 rounded-3"
                  onClick={() => handleRemoveItem(product.id)}
                >
                  <IoTrash />
                  Eliminar producto
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {cartProducts.length !== 0 ? (
          <div className="d-flex flex-column w-100 justify-content-evenly align-items-center">
            <p className="fs-4 m-3 precio">Precio final: ${totalPrice}</p>
            <div className="d-flex flex-row w-100 justify-content-evenly align-items-center">
              <button
                className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3"
                onClick={clear}
              >
                <IoTrash />
                Vaciar carrito
              </button>
              <Link
                to={"/"}
                className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3"
              >
                Seguir comprando!
              </Link>
              <button
                className="botones d-flex flex-row justify-content-center align-items-center border-4 rounded-3"
                onClick={() => setShowModal(true)}
              >
                <BsCartCheck />
                Finalizar compra
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="d-2">Tu carrito esta vacío</p>
            <Link to={"/"} className="botones">
              Agregar productos
            </Link>
          </div>
        )}
      </div>
      {showModal && (
        <Modal
          title="Datos de contacto"
          close={() => setShowModal()}
          className="modal-custom"
        >
          {success ? (
            <>
              <h2>Su orden se genero exitosamente</h2>
              <p>El id de su orden es: {success}</p>
              <div className="d-flex flex-column align-items-center justify-content-start my-5">
                {cartProducts.map((product) => {
                  const { title, imagenes, price, id, quantity } = product;
                  return (
                    <div
                      key={id}
                      className="d-flex flex-row w-100 justify-content-evenly carrito p-3 m-3"
                    >
                      <img
                        src={imagenes[0]}
                        alt="no disponible"
                        className="imagenCart"
                      />
                      <div className="d-flex flex-row justify-content-around align-items-center w-100 flex-wrap">
                        <p className="fs-4 mx-5">{title}</p>
                        <p className="fs-4 mx-5">Cant.: {quantity}</p>
                        <p className="fs-4 mx-5">Precio: ${price}</p>
                        <p className="fs-4 mx-5">
                          Subtotal: ${price * quantity}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="fs-4 m-3 precio">Precio final: ${totalPrice}</p>
              <Link to={"/"}>
                <button
                  className="botones border-3 rounded-5 my-5"
                  type="submit"
                  onClick={clear}
                >
                  Finalizar
                </button>
              </Link>
            </>
          ) : (
            <div className="d-flex flex-column justify-content-start align-items-center mt-5 ">
              <h3 className="my-3">Formulario</h3>
              <form
                onSubmit={submitData}
                className="d-flex flex-column justify-content-start align-items-center formulario"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y apellido"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control my-2 "
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control my-2 "
                />
                <input
                  type="Email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control my-2 "
                />
                <button
                  className="botones border-3 rounded-5 my-5"
                  type="submit"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default Cart;
