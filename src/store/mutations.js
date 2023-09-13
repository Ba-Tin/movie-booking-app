export default {
    setShowModal(state, value) {
        state.showModal = value;
    },
    //setMovie
    setMovies(state, movie) {
        state.movies = movie;
    },
    setMovieDetail(state, value) {
        state.movieDetail = value;
    },

    //showTimeMovie
    setShowTimeMoves(state, movie) {
        state.showTimeMovie = movie;
    },

    // seat
    setSeat(state, seat) {
        state.seat = seat;
    }
}