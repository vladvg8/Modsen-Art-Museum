import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Favorites from 'pages/Favorites';
import Artwork from 'pages/Artwork';
import ErrorBoundary from 'components/ErrorBoundary';
import { LocalStorageProvider } from 'contexts/LocalStorageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <LocalStorageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Artwork />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </LocalStorageProvider>
  </ErrorBoundary>
);
