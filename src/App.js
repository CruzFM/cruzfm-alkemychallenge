//Hooks
import {useState, useEffect} from 'react'

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
import Favoritos from "./components/Favoritos"

//Styles
import "./css/bootstrap.min.css"
import "./css/stylesAdd.css"


function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() =>{
      let favsInLocal = localStorage.getItem('favs');
      if(favsInLocal != null){
          const favsArray =  JSON.parse(favsInLocal);
          setFavorites(favsArray)
      }
  }, [])


  //TO DO: LÓGICA DE CORAZÓN ROJO
  const [isFav, setIsFav]  = useState(false)

  const favMovies = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if(favMovies === null){
    tempMoviesInFavs= [];
  } else{
    tempMoviesInFavs = JSON.parse(favMovies);
  }


  const addOrRemoveFromFavs = (e)=> {
    // console.log("this works!")
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData ={
      imgURL, title, overview,
      id:btn.dataset.movieId
    }
    let movieIsInArray = tempMoviesInFavs.find(movie =>{
      return movie.id === movieData.id
    });
    if(!movieIsInArray){
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs) )
      // console.log(movieIsInArray)
      setFavorites(tempMoviesInFavs)
      console.log('Se agregó la película');
      setIsFav(prevFav => !prevFav)
    } else {
      let moviesLeft = tempMoviesInFavs.filter(movie => {
        return movie.id !== movieData.id;
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft) );
      // console.log(movieIsInArray)
      setFavorites(moviesLeft)
      setIsFav(prevFav => !prevFav)
      console.log('Se eliminó la película');
    }
  }
  
  return (
    <> 
      
      <Header favorites={favorites} />

      <Routes>

        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} isFav={isFav} />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/results" element={<Results addOrRemoveFromFavs={addOrRemoveFromFavs}  />} />
        <Route path="/favoritos" element={<Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs} isFav={isFav}/>} />

      </Routes>

      <Footer />
      
    </>

  );
}

export default App;
