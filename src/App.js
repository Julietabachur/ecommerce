import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Detail from './pages/Detail';
import Products from './pages/Products';
import Footer from './Components/Footer/Footer';
import Checkout from './pages/Checkout';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/ecommerce' element={ <Home/> }/>
          <Route path='/productos' element={ <Home/> }/>
          <Route path='/category/:category' element={<Products/>}/>
          <Route path='/productos/:id' element={<Detail/>}/>
          <Route path='/contacto' element={ <Contacto/> }/>
          <Route path='/Cart' element={ <Checkout/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>    
    </CartProvider>
   
);
}

export default App;
