import { Routes, Route } from 'react-router-dom';
import Guide from './pages/Guide';
import Criteria from './pages/Criteria';
import Ratings from './pages/Ratings';
import './styles/app.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Guide />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/criteria" element={<Criteria />} />
      </Routes>
    </div>
  );
}

export default App;
