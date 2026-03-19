import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Trilema from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/trilema" replace />} />
        <Route path="/trilema" element={<Trilema />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
