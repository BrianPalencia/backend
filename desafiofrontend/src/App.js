import './App.css';
import { useState } from "react";
import NavBar from './components/NabBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './views/home';
import CheckOut from './views/checkOut';

function App() {
  const [checkout, setCheckOut] = useState([]);
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar total={checkout.length} />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer setCheckOut={setCheckOut} /> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          <Route path="/cart" element={<CheckOut products={checkout} />}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
