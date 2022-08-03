import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route  } from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Cart from './pages/Cart';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<Detail/>}/>
        <Route path='/contacto' element={ <Contacto/> }/>
        <Route path='/cart' element={ <Cart/> }/>
      </Routes>
    </BrowserRouter>    
   
);
}

export default App;
