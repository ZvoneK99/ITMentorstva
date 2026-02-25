import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";
const SearchBar = () => {
    const apiKey = process.env.REACT_APP_OMDBAPI_KEY;
    const apiUrl = process.env.REACT_APP_OMDBAPI_URL;
    const [movie, setMovie] = useState(null);
    const [movieName, setMovieName] = useState("");

    const searchMovieByTitle = () => {
        // console.log(movieName);
        axios.get(`${apiUrl}/?t=${movieName}&apikey=${apiKey}`)
            .then(response => setMovie(response.data));
    }

    useEffect(() => {
        searchMovieByTitle();
    }, []);

    return (
        <>
            <h1>Movie search</h1>
            <form className="d-flex flex-column mb-4">
                <input type="text" placeholder="Enter the name of the movie" onInput={e => setMovieName(e.target.value)} />
                <button type="button" onClick={searchMovieByTitle}>Search!</button>
            </form>
            {movie && <Movie movie={movie} />}
        </>
    );
}
export default SearchBar;