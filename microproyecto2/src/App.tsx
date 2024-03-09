import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClubsList from './components/ClubsList';
import RegisterForm from './components/RegisterForm'; // Asumiendo que tienes este componente
import LoginForm from './components/LoginForm'; // Asumiendo que tienes este componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/inicio" element={<ClubsList />} />
      </Routes>
    </Router>
  );
}

export default App;

