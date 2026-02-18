import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {

    const { imdbID } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getMovieDetail() {
        try {
            setLoading(true);
            let response = await axios.get(`https://www.omdbapi.com/?apikey=73cf620b&i=${imdbID}`);
            setMovieDetail(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ textAlign: "center" }}>

            <h2>Movie Detail</h2>
            <button onClick={() => { getMovieDetail() }}>Get Movie Detail</button>
            {loading && <h2>Loading...</h2>}
            {movieDetail && (
                <div style={{
                    width: "800px",
                    display: "flex",
                    gap: "30px",
                    padding: "20px",
                    margin: "0 auto"
                }}>

                    <img src={movieDetail.Poster} style={{ width: "300px", height: "450px", }} />
                    <div>
                        <h3>{movieDetail.Title}</h3>
                        <p><b>Year:</b> {movieDetail.Year}</p>
                        <p><b>Runtime:</b> {movieDetail.Runtime}</p>
                        <p><b>Genre:</b> {movieDetail.Genre}</p>
                        <p><b>Director:</b> {movieDetail.Director}</p>
                        <p><b>IMDb Rating:</b> {movieDetail.imdbRating}</p>
                        <p><b>Plot:</b> {movieDetail.Plot}</p>
                    </div>

                </div>
            )}

        </div>
    )
}
