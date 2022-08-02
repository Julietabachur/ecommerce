import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ItemDetailContainer/>
    </BrowserRouter>    
   
);
}

export default App;
