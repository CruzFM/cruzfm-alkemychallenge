import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import sweetAlert from '@sweetalert/with-react'


export default function Results(){

    let  query= new URLSearchParams(window.location.search)

    let keyword = query.get('keyword')

    /* 
    let query = new URLSearchParams(window.location.search)

    let movieID = query.get('movieID')
    
    */

    const [movieResults, setMovieResults] = useState([])

    const { newKeyword } = useParams()
    // console.log(newKeyword)
    
    useEffect( () => {
        
        const endPoint =  `https://api.themoviedb.org/3/search/movie?api_key=24397d60abb47cc321fbb481ed4e7c75&language=en-US&query=${keyword}`
        // console.log(endPoint)
        axios.get(endPoint)
            .then(response => {
                const moviesArray = response.data.results

                if(moviesArray.length === 0){
                    sweetAlert(<h2>No results were found, try another keyword</h2>)
                }
                // console.log(moviesArray)
                setMovieResults( moviesArray )
            })

            .catch( error => {
                sweetAlert(<h2>We're working on a solution, thanks for your patience</h2>)
                console.log(error)
            })


    }, [keyword] )


    // console.log(keyword)
    return(
        <>
            <h2>Usted buscó <em>{keyword}</em></h2>
            {movieResults.lengthj === 0 && <p>Cargando...</p>}
            
            {/* TO DO: RENDERIZAR CARDS CON PELICULAS*/}
            {movieResults.length > 0 && 
                (<div className='container d-flex flex-wrap' >

                    {movieResults.map( (movie, idx) => {
                        return(
                            <div key={idx} id={movie.id}>
                                <div>
    
                                    <div className="card">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="movie" />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.original_title}</h5>
                                            <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View Details</Link>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
    
                        )
    
                    })}


                </div>)
            }     
        
        </>

    )
}