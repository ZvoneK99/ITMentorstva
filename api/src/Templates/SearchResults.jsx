import { Container } from "react-bootstrap"
import MovieCard from "./Snippets/MovieCard"


const SearchResults = ({ movies }) => {
    return (
        <div className="bg-dark">
            <Container className="d-flex flex-wrap">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Container>
        </div>
    )
}

export default SearchResults;