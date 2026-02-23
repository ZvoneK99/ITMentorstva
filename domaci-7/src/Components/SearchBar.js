import axios from "axios";
import { useState } from "react";

const SearchBar = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
    const [movieName, setMovieName] = useState("");
    const searchMovieByName = (name) => {
        //console.log(name.target.value);
        setMovieName(name.target.value);
    }

    axios.get(`${apiUrl}/?t=${movieName}&apikey=${apiKey}`)
        .then(response => console.log(response.data));



    return (
        <div className="movie-search-container d-flex justify-content-center align-items-center flex-column">
            <h1>Movie search</h1>
            <input type="text" placeholder="Enter the name of the movie" onChange={searchMovieByName} />
        </div>
    );
}
export default SearchBar;