import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';
import router from './router';
import config from '../formkit.config.ts';
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));

app.mount('#app');
