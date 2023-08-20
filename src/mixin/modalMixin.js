import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['showModal'])
    },
    methods: {
        ...mapActions(['setShowModal']),
        closeModal() {
            this.setShowModal(!this.showModal);
            console.log("hello");
        },
    }

};