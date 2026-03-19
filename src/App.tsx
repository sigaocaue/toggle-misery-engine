import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trilema from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trilema />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
