import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            tabs: [
                { id: 1, name: 'Phim đang chiếu' },
                { id: 2, name: 'Phim sắp chiếu' },
            ],
            activeTab: 1,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            },
        };
    },
    computed: {
        ...mapState(['movies']),
        activeTabMovies() {
            const currentDate = new Date();
            if (this.activeTab === 1) {
                return this.movies.filter(movie => new Date(movie.startDate) <= currentDate);
            } else if (this.activeTab === 2) {
                return this.movies.filter(movie => new Date(movie.startDate) > currentDate);
            }
            return [];
        },
    },
    methods: {
        ...mapActions(['getAllMovies']),
        changeTab(tab) {
            this.activeTab = tab;
        },
        async fetchAllMovies() {
            await this.getAllMovies();
        },
    },
    created() {
        this.fetchAllMovies();
    },
};