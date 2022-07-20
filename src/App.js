import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a mi tienda!"/>
    </>
);
}

export default App;
