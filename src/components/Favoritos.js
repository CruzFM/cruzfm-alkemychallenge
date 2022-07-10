import { useState, useEffect } from 'react';

export default function Favoritos(){

    const [favorites, setFavorites] = useState([]);

    useEffect(() =>{
        let favsInLocal = localStorage.getItem('favs');
        if(favsInLocal != null){
            const favsArray =  JSON.parse(favsInLocal);
            setFavorites(favsArray)
        }
    }, [])

    return(

        <>
            <h2>Sección de favoritos</h2>
            <div className='container d-flex flex-wrap'>

            {
                favorites.map( (movie, idx) => {
                    return(

                        <div key={idx}>
                            <div>

                                <div className="card">
                                    <img src={movie.imgURL} className="card-img-top" alt="movie" />
                                    {/* <button className='favoriteBtn' onClick={props.addOrRemoveFromFavs} data-movie-id={movie.id}>
                                        ♡
                                    </button> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.overview.substring(0, 50)}...</p>
                                        {/* <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">View Details</Link> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })

            }

            </div>
        
        </>
    )
}