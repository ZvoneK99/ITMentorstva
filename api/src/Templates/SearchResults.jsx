import { Container } from "react-bootstrap"
import MovieCard from "./Snippets/MovieCard"
import { useContext } from "react";
import { MoviesContext } from "../Context/MoviesContext";

const SearchResults = () => {
    const { movies } = useContext(MoviesContext);
    return (
        <div className="bg-dark">
            <Container className="d-flex flex-wrap">
                {movies.map(movie => {
                    return <MovieCard movie={movie} />
                })}
            </Container>
        </div>
    )
}

export default SearchResults;