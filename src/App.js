import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Products from './pages/Products';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/Products' element={ <Products/> }/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemDetailContainer/>}/>
        <Route path='/contacto' element={ <Contacto/> }/>
        <Route path='/cart' element={ <Cart/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>    
   
);
}

export default App;
