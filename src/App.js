import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Navbar from './Components/Navbar/Navbar';
//import Card from './Components/Card/Card';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route, Form} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error from './Components/Error/Error';
import Cart from './Components/Cart/Cart';



function App() {

  return (
    <Router>
      <Navbar/>
      <Carrusel/>
      <h1 className="d-flex justify-content-center">Catalogo de Bebidas.</h1>
      <div>
        <form className="d-flex flex-row mb-3 justify-content-end" action="">
          <h2>Busca tu bebida!</h2>
          <input type="text"/>
          <button type="submit">Buscar bebidas.</button>
        </form>
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/detail/:{name}' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
