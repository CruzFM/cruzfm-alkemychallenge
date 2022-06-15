//Libraries
import React from "react"
import { Routes, Route } from 'react-router-dom'

//Components
import Login from "./components/Login"
import Listado from "./components/Listado"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Results from "./components/Results"
import Detalle from "./components/Detalle"

//Styles
import "./css/bootstrap.min.css"
import "./css/stylesAdd.css"

function App() {

  let addOrRemoveFromFavs = ()=> {
    console.log("this works!")
  }
  
  return (
    <> 
      
      <Header />

      <Routes>

        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/results" element={<Results />} />

      </Routes>

      <Footer />
      
    </>

  );
}

export default App;
