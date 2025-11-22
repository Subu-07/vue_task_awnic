import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


;(app.config as any).devtools = false

app.mount('#app')
