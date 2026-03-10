import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";

const Search = () => {
    return (
        <>

            <Form className="bg-dark text-white">
                <Container className="p-5">
                    <Form.Group className="mb-1" controlId="formBasicTerm">
                        <Form.Label>Enter movie title</Form.Label>
                        <Form.Control type="text" placeholder="Enter movie title" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Container>
            </Form >
        </>
    )


}
export default Search;