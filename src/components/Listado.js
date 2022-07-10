import React, {useEffect, useState} from 'react'
import { Navigate, Link } from 'react-router-dom'
import axios from 'axios'
import sweetAlert from '@sweetalert/with-react'

export default function Listado(props){


    const [movieList, setMovieList] = useState( [] )

    let token = sessionStorage.getItem('token')
    useEffect(() =>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=24397d60abb47cc321fbb481ed4e7c75&language=en-US&page=1'
        axios.get(endPoint)
            .then( res => {
                const apiData = res.data
                setMovieList(apiData.results)
                // console.log(movieList)
            })
            // Por si se generan errores
            .catch(error => {
                sweetAlert(<h2>We're having server issues and we're working to fix it</h2>)
            })

    }, [movieList] )

    // props.addOrRemoveFromFavs()
    return(
        <div className='container' >

            { !token && <Navigate to="/"/> }
            <div className='container d-flex justify-content-center align-items-center'>

                <h2>Welcome to FerFlix!</h2>

            </div>

            <div className='container d-flex flex-wrap' >

            {
                movieList.map( (movie, idx) => {
                    return(

                        <div key={idx}>
                            <div>

                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="card-img-top" alt="movie" />
                                    <button className='favoriteBtn' onClick={props.addOrRemoveFromFavs} data-movie-id={movie.id}>
                                        ♡
                                    </button>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.original_title}</h5>
                                        <p className="card-text">{movie.overview.substring(0, 50)}...</p>
                                        <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

            </div>


        </div>

    )
}