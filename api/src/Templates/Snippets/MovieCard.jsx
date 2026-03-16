

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="col-3 p-2 text-white">
                <img className="w-100 movie-poster" src={movie.Poster} alt={movie.Title} />
                <h5>{movie.Title}</h5>
                <p>{movie.Year}</p>
            </div>
        </>
    )
}

export default MovieCard;