import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Disable Vue Devtools
;(app.config as any).devtools = false

app.mount('#app')
