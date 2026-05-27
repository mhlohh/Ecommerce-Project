import  {HomePage}  from './pages/HomePage.jsx';
import {Routes,Route} from 'react-router';
import './App.css';
export function App() {
  return(
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<div></div>} />
    </Routes>
  );
}

export default App
