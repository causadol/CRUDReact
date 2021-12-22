import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';
import Predio from './Pages/Predio';
import ListarPersona from './Pages/ListarPersona';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/dashboard" element = {<Dashboard />} />
          <Route path="/registro" element = {<Register />} />
          <Route path="/predio" element = {<Predio />} />
          <Route path="/listar-personas" element = {<ListarPersona />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
