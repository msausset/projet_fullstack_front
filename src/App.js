import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Connexion from './components/User/Connexion';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/connexion' element={<Connexion />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
