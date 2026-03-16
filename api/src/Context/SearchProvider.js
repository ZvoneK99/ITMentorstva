import { useState } from "react";
import { MoviesContext } from "./MoviesContext";

const SearchProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default SearchProvider;