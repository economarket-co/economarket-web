import './App.css';
import { Footer } from './components/Footer';
import Home from './Router/Routes/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import VistaProducts from './Router/Routes/VistaProducts';
import VistaCategorias from './Router/Routes/VistaCategorias';
import VistaCarrito from './Router/Routes/VistaCarrito';
import { useStatevalue } from './StateProvider';
import { useEffect } from 'react';
import { DataService } from './components/utilities/DataService';
import { actionTypes } from './reducer';
import VistaPromociones from './Router/Routes/VistaPromociones';
import VistaFavoritos from './Router/Routes/VistaFavoritos';
import Login from './Router/Routes/Login';
import Registro from './Router/Routes/Registro';
import VistaComparador from './Router/Routes/VistaComparador';
import SearchBar from './components/utilities/SearchBar';


function App() {

  const [{products, openSearch}, dispatch] = useStatevalue();

  useEffect(() =>{

    DataService("/products/scrap", "GET")
      .then(r =>{

        if(r?.data.length > 0){
          dispatch({
            type: actionTypes.LOAD_PRODUCTS,
            products: r.data
          })
        }
      })
    .catch(e =>{

      console.log("Error al obtener los datos", e);
    })
  }, [dispatch] )
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element = { <Home />}/>
        <Route path="/productos" element = { <VistaProducts />}/>
        <Route path="/categorias" element = { <VistaCategorias />}/>
        <Route path="/carrito" element = { <VistaCarrito />}/>
        <Route path="/promociones" element = { <VistaPromociones />}/>
        <Route path="/favoritos" element = { <VistaFavoritos />}/>
        <Route path="/login" element = { <Login />}></Route>
        <Route path="/signup" element = { <Registro />}/>
        <Route path="/comparador" element = { <VistaComparador />}/>
      </Routes>
      <SearchBar open={openSearch}/>  
      <Footer/>
    </div>

  );
}

export default App;
