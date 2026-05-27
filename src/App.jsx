import  {HomePage}  from './pages/HomePage.jsx';
import {Routes,Route} from 'react-router';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import {OrdersPage} from './pages/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import './App.css';
export function App() {
  return(
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage />}/>
      <Route path='tracking' element={<TrackingPage />}/>
    </Routes>
  );
}

export default App
