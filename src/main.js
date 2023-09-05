import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './modules/helpers/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFaceFrown, faHouse, faLocationDot, faLock, faNewspaper, faPenToSquare, faPeopleLine, faRectangleList, faUnlock, faUser as fasUser, faUserPlus, faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser, faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

library.add(fasStar, farStar, faLocationDot, faUnlock, faHouse, faLock, faPenToSquare, faNewspaper, faRectangleList, faPeopleLine, faUserPlus, faFaceFrown, farUser, fasUser)

createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

