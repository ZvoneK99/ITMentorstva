import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Templates/Snippets/MovieCard";


const Movies = () => {
    const apiKey = process.env.REACT_APP_OMDBAPI_KEY;
    const apiUrl = process.env.REACT_APP_OMDBAPI_URL;
    const [movieName, setMovieName] = useState("Lord of the rings");
    const [movieData, setMovieData] = useState({});

    const searchMovieByTitle = () => {
        axios.get(`${apiUrl}/?t=${movieName}&apikey=${apiKey}`)
            .then(response => setMovieData(response.data));
    }

    useEffect(() => {
        searchMovieByTitle();
    }, []);

    return (
        <>
            <div className="movie-search-container">
                <h1>Movie search</h1>
                <form className="d-flex flex-column mb-4" onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Enter the name of the movie" onInput={e => setMovieName(e.target.value)} />
                    <button type="button" onClick={searchMovieByTitle}>Search!</button>
                </form>
                <MovieCard movie={movieData} />
            </div>
        </>
    );
}
export default Movies