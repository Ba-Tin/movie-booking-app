import axios from "axios";
// import { BASE_URL } from "../contant/network";
export default {
    setShowModal({ commit }, value) {
        commit('setShowModal', value)
    },
    // getDataMovie
    async getAllMovies({ commit }) {
        try {
            const response = await axios.get("http://localhost:3000/movies");
            commit('setMovies', response?.data);
        } catch (error) {
            console.error('Error', error);
        }
    },
    //get Movie By id
    async getMovieById({ commit }, id) {
        try {
            const response = await axios.get(`http://localhost:3000/movies/${id}`);
            commit('setMovieDetail', response?.data);
        } catch (error) {
            console.error('Error', error);
        }
    },
}