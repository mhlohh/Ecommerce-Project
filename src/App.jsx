import  {HomePage}  from './pages/HomePage.jsx';
import {Routes,Route} from 'react-router';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import {OrderPage} from './pages/OrderPage.jsx';
import './App.css';
export function App() {
  return(
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrderPage />}/>
    </Routes>
  );
}

export default App
