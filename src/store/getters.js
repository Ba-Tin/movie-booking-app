export default {
    selectedMovieShowtimes(state) {
        if (state.movieDetail) {
            const movieId = state.movieDetail.id;
            const cinemasWithShowtimes = [];
            const currentDate = new Date();
            state.showTimeMovie?.forEach((cinema) => {
                const cinemaWithShowtimes = { ...cinema, cinemaAddressList: [] };
                cinema.cinemaAddressList.forEach((address) => {
                    const addressWithFilms = { ...address, listFilm: [] };
                    address.listFilm.forEach((film) => {
                        if (film.filmId === movieId) {
                            const filteredShowTimes = film.showTimes.filter((showTime) => {
                                const showDate = new Date(showTime.date);
                                return showDate >= currentDate;
                            });

                            if (filteredShowTimes.length > 0) {
                                film.showTimes = filteredShowTimes;
                                addressWithFilms.listFilm.push(film);
                            }
                        }
                    });
                    if (addressWithFilms.listFilm.length > 0) {
                        cinemaWithShowtimes.cinemaAddressList.push(addressWithFilms);
                    }
                });
                if (cinemaWithShowtimes.cinemaAddressList.length > 0) {
                    cinemasWithShowtimes.push(cinemaWithShowtimes);
                }
            });

            return cinemasWithShowtimes;
        }
        return [];
    },
}