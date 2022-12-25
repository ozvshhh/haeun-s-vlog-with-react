import './App.css';
import {React, useState} from "react";
import data from "./data/data.js";
import { Routes, Route, Link } from 'react-router-dom';
import Main from "./pages/Main";
import Documents from "./pages/Documents";

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Main></Main>} />
      <Route path='/documents' element={<Documents></Documents>}/>
    </Routes>
    
    </>
  );
  
}

function Navbar() {
  return(
    <div className = {'navbar'}>
      <div className = {'nav_inner'}><Link to="/">Home</Link></div>
      <div className = {'nav_inner'}><Link to="/documents">Documents</Link></div>
      <div className = {'nav_inner'}>Note</div>
      <div className = {'nav_inner'}>Documents</div>
      <div className = {'nav_inner'}>About_ME</div>
    </div>
  )

}




export default App;
