import "../css/MovieCard.css"

function MovieCard({movie}){

    function onFavouriteClick(){
        alert("Added to favorites")
    }

    return <div className="movie-card">
        <div className="movie-poster">
    <img src={movie.url} alt={movie.title}/>
    <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavouriteClick}>❤️</button>
    </div>
        </div>
<div className="movie-info">
    <h3>{movie.titile}</h3>
    <p>{movie.release_date}</p>
</div>
    </div>
}

export default MovieCard