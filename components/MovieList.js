
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import Movie from "./Movie";

function MovieList() {
    const movies = useSelector(state => state.movies);

    function getMovieListItems() {
        return movies.map(movie => {
            return <Movie 
                key={movie.id}
                movie={movie}
                >
            </Movie>
        })
    }

    return (
        <Row>
            {getMovieListItems()}
        </Row>
    )
}
export default MovieList;