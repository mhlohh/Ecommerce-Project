import  {HomePage}  from './pages/HomePage.jsx';
import {Routes,Route} from 'react-router';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import './App.css';
export function App() {
  return(
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  );
}

export default App
