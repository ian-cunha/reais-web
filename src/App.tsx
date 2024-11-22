import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Plans from './pages/Plans/Plans';
import FreePlan from './pages/FreePlan/FreePlan';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/gratuito" element={<FreePlan />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;