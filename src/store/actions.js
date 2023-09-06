import axios from "axios";
import { BASE_URL } from "@/contant/network";
export default {
    setShowModal({ commit }, value) {
        commit('setShowModal', value)
    },
    // getDataMovie
    async getAllMovies({ commit }) {
        try {
            const response = await axios.get(`${BASE_URL}/movies`);
            commit('setMovies', response?.data);
        } catch (error) {
            console.error('Error', error);
        }
    },
    //get Movie By id
    async getMovieById({ commit }, id) {
        try {
            const response = await axios.get(`${BASE_URL}/movies/${id}`);
            commit('setMovieDetail', response?.data);
        } catch (error) {
            console.error('Error', error);
        }
    },


    //getAllCinema_and_showtime
    async getAllShowTimes({ commit }) {
        try {
            const response = await axios.get(`${BASE_URL}/showtimesmovies`);
            commit('setShowTimeMoves', response?.data);
        } catch (error) {
            console.error('Error', error);
        }

    }
}