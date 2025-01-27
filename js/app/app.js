import { router } from './router.js';

document.addEventListener('DOMContentLoaded', function(){
    const main = {};

    var app = Vue.createApp(main)
    .use(router)
    .mount('#content')
});