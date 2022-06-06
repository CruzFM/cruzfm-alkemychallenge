import React from "react"
import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import Listado from "./components/Listado"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./css/bootstrap.min.css"
import "./css/stylesAdd.css"
import Detalle from "./components/Detalle"

function App() {
  return (
    <> 
      
      <Header />

      <Routes>

        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle" element={<Detalle />} />

      </Routes>

      <Footer />
      
    </>

  );
}

export default App;
