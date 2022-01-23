import constants from "../constants";
import Link from "next/link";

function Movie({movie}) {

    function getPoster() {
        return `${constants.imageBaseUrl}${movie.poster_path}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="grid-movie-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="movie-poster w-50" 
                        src={getPoster()} alt={movie.title}/>
                        <div className="px-2">
                            <div className="movie-vote badge rounded-pill bg-primary">
                                {movie.vote_average}
                            </div>
                            <Link href={`/movies/${movie.id}`}>
                                <a className="fw-bold movie-title py-1 d-block">
                                    {movie.title}
                                </a>
                            </Link>
                            <div className="movie-release-date">{movie.releaseDate}</div>
                        </div>
                    </div>
                    <div className="movie-overview pt-3">
                        {movie.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movie;