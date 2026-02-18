import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function OmdbApi() {

    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState("");
    const [loading, setLoading] = useState(false);

    async function getMovies() {
try{
    setLoading(true);
            let res = await axios.get(`https://www.omdbapi.com/?apikey=73cf620b&s=${movieName}`);
        setMovies(res.data.Search);
}catch(err){
    console.log(err);

}finally{
    setLoading(false);
}
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>OmdbApi</h1>
            <label htmlFor="">Enter Movie Name </label>&nbsp;
            <input type="text" onChange={(event)=>{setMovieName(event.target.value)}}/>&nbsp;
            <button onClick={getMovies}>Get Movies </button>
            {loading && <h2>Loading...</h2>}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {
                    movies.map((movie) => {
                        return (
                            <div style={{ width: "220px", padding: "10px", textAlign: "center" }}>
                                <img src={movie.Poster} style={{ width: "200px", height: "200px", }} />
                                <h3>{movie.Title}</h3>
                                <p> Year: {movie.Year} </p>
                                <p> Type: {movie.Type} </p>
                                <p> IMDb ID: {movie.imdbID}</p>
                                <Link to={`/moviedetail/${movie.imdbID}`}>Movie Detail</Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
