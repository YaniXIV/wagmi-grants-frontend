import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import ProjectSubmission from './components/ProjectSubmission';
import About from './components/About';
import Contact from './components/Contact';
import Grants from './components/Grants';
import Background from './components/Background';
import './App.css';

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Background />
        <div className="relative z-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                    <Auth />
                  </div>
                </div>
              } />
              <Route 
                path="/submit-project" 
                element={
                  <ProtectedRoute>
                    <ProjectSubmission />
                  </ProtectedRoute>
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/grants" element={<Grants />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
