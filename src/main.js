import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './helpers/store';
import style from './public/sass/main.scss';

createApp(App).use(store).use(router).use(style).mount('#app');
