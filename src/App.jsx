import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Rosters from './Rosters.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rosters" element={<Rosters />} />
    </Routes>
  );
}

export default App
