import axios from "axios";
import { useState, useEffect } from "react";

const SearchBar = () => {
    const apiKey = process.env.REACT_APP_OMDBAPI_KEY;
    const apiUrl = process.env.REACT_APP_OMDBAPI_URL;

    const [movieName, setMovieName] = useState("");

    const searchMovieByTitle = (name) => {
        // console.log(movieName);
        axios.get(`${apiUrl}/?t=${movieName}&apikey=${apiKey}`)
            .then(response => console.log(response.data));
    }

    useEffect(() => {
        searchMovieByTitle();
    }, []);

    return (
        <>
            <h1>Movie search</h1>
            <form className="d-flex flex-column">
                <input type="text" placeholder="Enter the name of the movie" onInput={e => setMovieName(e.target.value)} />
                <button type="button" onClick={searchMovieByTitle}>Search!</button>
            </form>
        </>
    );
}
export default SearchBar;