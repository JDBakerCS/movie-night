
export default function MovieCard({ movie, onToggle }) {
    let watchStatus = "";
    if (movie.watched) {
        watchStatus = "Watched"
    } else {
        watchStatus = "NOT Watched"
    }
    let buttonLabel = "";
    if (movie.watched) {
        buttonLabel = "Mark as Unwatched";
    } else {
        buttonLabel = "Mark as Watched";
    }
    return (
        <div classname="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.genre}({movie.year})</p>
            <p>{watchStatus}</p>
            <button onClick={() => onToggle(movie.id)}>
                {buttonLabel}
            </button>
        </div>
    );
}
