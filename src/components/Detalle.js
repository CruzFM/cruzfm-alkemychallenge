import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Detalle(){

    let token = sessionStorage.getItem('token')

    let query = new URLSearchParams(window.location.search)

    let movieID = query.get('movieID')

    const [movie, setMovie] = useState(null)

    useEffect( () => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=24397d60abb47cc321fbb481ed4e7c75&language=en-US`
        axios.get(endPoint)
            .then( res =>{
                const movieData = res.data
                setMovie(movieData)
            })
    }, [movieID])



    

    return(
        <>
            { !token && <Navigate to="/"/> }
            {!movie &&  <h2>Loading...</h2>}

            { movie && 
                <> 
                    <h2> Movie Name: {movie.original_title} </h2>
                    <div className=" container row">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster" className="col-4"/>
                        
                        <div className="col-8">
                            <div>
                                <h4>Release date: {movie.release_date}</h4>
                            </div>

                            <div>
                                <h4> 
                                    Genres:
                                </h4>
                                <p>
                                    {movie.genres.map(genre =>{
                                            return(
                                                <li key={genre.id}>{genre.name}</li>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                            
                            <div>
                                <h4> Overview: 

                                </h4>
                                <p>
                                    {movie.overview}
                                </p> 
                            </div>

                            <div>
                                <h4> Rating: {movie.vote_average} </h4>
                            </div>
                        </div>

                    </div>
                </>
            }
        </>
    )
}