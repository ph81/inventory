import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';
import { useLocalStorage } from './utils/hooks/useLocalStorage';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

const App = () => {

  const [items, setItems] = useLocalStorage('items', []);


  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{items, setItems}}>
      <Routes>
        <Route index path='/' element={<Products />} />
        <Route index path='/home' element={<Products />} />
        <Route exact path='/new' element={<NewProduct />} />
        <Route exact path='/edit/:id' element={<EditProduct />} />
      </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
