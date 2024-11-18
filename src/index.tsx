import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const Art: React.FC = () => <h1>Страница с искусством</h1>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
