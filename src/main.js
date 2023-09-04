import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'

library.add(fasStar,  farStar)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
