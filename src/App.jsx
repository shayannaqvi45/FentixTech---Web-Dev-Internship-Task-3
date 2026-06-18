import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PhotosCatalog from './pages/PhotosCatalog';
import VideosCatalog from './pages/VideosCatalog';
import PhotoDetail from './pages/PhotoDetail';
import VideoDetail from './pages/VideoDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PhotosCatalog />} />
          <Route path="/videos" element={<VideosCatalog />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
