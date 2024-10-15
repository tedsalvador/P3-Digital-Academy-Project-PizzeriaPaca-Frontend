import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT

axios.interceptors.response.use(
(response) => {
  return response 
},
(error) => {  
  if (error.response && error.response.status === 401) {
    //(console.error('No autorizado, redirigiendo al login...')
    router.push('/')
  }
  return Promise.reject(error)
}
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
