

const Movie = ({ movie }) => {
    return (
        <>
            <img src={movie.Poster} />
            <h1>{movie.Title}</h1>
            <h5>{movie.Plot}</h5>
        </>
    )
}
export default Movie;