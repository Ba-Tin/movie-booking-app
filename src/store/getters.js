export default {
    moviesWithShowtimes(state) {
        return state.movies.map(movie => ({
            ...movie,
            showtimes: state.showTimeMovie.find(
                showtimes => showtimes.filmId === movie.id
            )?.showTimes || []
        }));
    }
}