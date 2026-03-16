import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../Templates/SearchResults";

const Search = () => {

    const apiKey = process.env.REACT_APP_OMDBAPI_KEY;
    const apiUrl = process.env.REACT_APP_OMDBAPI_URL;
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    const SearchMovies = (e) => {
        e.preventDefault();
        axios.get(`${apiUrl}/?s=${searchTerm}&apikey=${apiKey}`)
            .then(response => console.log(response.data.Search))
            .catch(error => console.error(error));
    }

    return (
        <>

            <Form className="bg-dark text-white">
                <Container className="p-5">
                    <Form.Group className="mb-1" controlId="formBasicTerm">
                        <Form.Label>Enter movie title</Form.Label>
                        <Form.Control type="text" placeholder="Enter movie title" onInput={(e) => setSearchTerm(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={SearchMovies}>Search</Button>
                </Container>
            </Form >

            <SearchResults movies={movies} />
        </>
    )

}
export default Search;