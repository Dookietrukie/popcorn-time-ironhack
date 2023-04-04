import movies from '../data/movies.json';
import './Main.css'

const Main = () => {

    return(
        <div className="Main">
            {movies.map(movie => (
                <div key={movie.id} className="card">
                    <h2>{movie.title}</h2>
                    <p>Rating: {movie.rating}</p>
                    <p>Year: {movie.year}</p>
                </div>
            ))}
        </div>
    )
}

export default Main;