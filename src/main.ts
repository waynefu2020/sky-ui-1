import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from "vue-router";
import Wayne from './components/Wayne.vue';
import Wayne2 from './components/Wayne2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path:'/', component: Wayne},
        {path:'/xxx', component: Wayne2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
