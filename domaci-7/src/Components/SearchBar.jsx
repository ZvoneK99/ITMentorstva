import axios from "axios";
import { useState } from "react";

const SearchBar = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
    const [movieName, setMovieName] = useState("");

    const searchMovieByTitle = (name) => {
        // console.log(movieName);
        axios.get(`${apiUrl}/?t=${movieName}&apikey=${apiKey}`)
            .then(response => console.log(response.data));
    }





    return (
        <div className="movie-search-container d-flex justify-content-center align-items-center flex-column">
            <h1>Movie search</h1>
            <form>
                <input type="text" placeholder="Enter the name of the movie" onInput={e => setMovieName(e.target.value)} />
                <button type="button" onClick={searchMovieByTitle}>Search!</button>
            </form>
        </div>
    );
}
export default SearchBar;