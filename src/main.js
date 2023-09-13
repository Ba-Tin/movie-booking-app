import { createApp } from 'vue'
import App from './App.vue'
import 'vue3-carousel/dist/carousel.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'boxicons'
import './assets/css/style.css'
import router from './router'
import "vue3-circle-progress/dist/circle-progress.css";
import store from './store'
import 'vue3-toastify/dist/index.css';
import { auth } from './configs/firebase'

let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        app.use(store).use(router).mount('#app');
    }
})
