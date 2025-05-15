import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="stories" element={<StoryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="comingSoon" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
