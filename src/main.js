import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


const head = document.head;
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap';
head.appendChild(link);

createApp(App).use(store).use(router).mount('#app')
