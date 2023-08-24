import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['showModal'])
    },
    methods: {
        ...mapActions(['setShowModal']),
        toggleModal() {
            this.setShowModal(!this.showModal);
        },
    }

};