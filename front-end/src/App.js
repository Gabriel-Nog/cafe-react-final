import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pedidos from './Pages/SaleOrder/SaleOrder';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sale-order" element={<Pedidos />} />
        <Route path="/sale-order/:id" element={<Pedidos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
