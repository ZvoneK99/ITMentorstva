import { Container } from "react-bootstrap"
import MovieCard from "./Snippets/MovieCard"


const SearchResults = ({ movies }) => {
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