import { Routes, Route } from 'react-router-dom';
import Guide from './pages/Guide';
import Criteria from './pages/Criteria';
import Ratings from './pages/Ratings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Guide />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/criteria" element={<Criteria />} />
    </Routes>
  );
}

export default App;
