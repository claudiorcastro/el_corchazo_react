import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Navbar from './Components/Navbar/Navbar';
//import Card from './Components/Card/Card';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error from './Components/Error/Error';
import Cart from './Components/Cart/Cart';



function App() {

  return (
    <Router>
      <Navbar/>
      <Carrusel/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
