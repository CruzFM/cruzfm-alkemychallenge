import React, {useEffect, useState} from 'react'
import { Navigate, Link } from 'react-router-dom'
import axios from 'axios'
import sweetAlert from '@sweetalert/with-react'

export default function Listado(){

    // const navigate = useNavigate()

    const [movieList, setMovieList] = useState( [] )

    let token = localStorage.getItem('token')
    useEffect(() =>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=24397d60abb47cc321fbb481ed4e7c75&language=en-US&page=1'
        axios.get(endPoint)
            .then( res => {
                const apiData = res.data
                setMovieList(apiData.results)
                console.log(movieList)
            })
            // Por si se generan errores
            .catch(error => {
                sweetAlert(<h2>Tuvimos un error, nos encontramos trabajando para solucionarlo</h2>)
            })
    }, [setMovieList] )


    return(
        <div className='container' >

            { !token && <Navigate to="/"/> }
            <div className='container d-flex justify-content-center align-items-center'>

                <h2>Hola Fer, estamos todo bien por acá</h2>

            </div>

            <div className='container d-flex flex-wrap' >

            {
                movieList.map( (movie, idx) => {
                    return(

                        <div key={idx} id={movie.id}>
                            <div>

                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} class="card-img-top" alt="movie" />
                                    <div class="card-body">
                                        <h5 class="card-title">{movie.original_title}</h5>
                                        <p class="card-text">{movie.overview.substring(0, 50)}...</p>
                                        <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">Go somewhere</Link>
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