import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PeopleDirectory from './components/PeopleDirectory';
import './styles.css';



function App() {
  const adminName = "John Doe";
  return (
    <Router>
      <Header adminName={adminName} /> 
      <div className="flex h-screen">
          <Sidebar />
        <div className="flex-grow flex flex-col">  {/* Main content fills remaining space */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/people" element={<PeopleDirectory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;