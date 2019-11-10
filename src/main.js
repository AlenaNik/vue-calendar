import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDrRvfzWqHDbAPHYVNPVnpXy4EIYC-gQoU",
  authDomain: "calendar-project-vue.firebaseapp.com",
  databaseURL: "https://calendar-project-vue.firebaseio.com",
  projectId: "calendar-project-vue",
  storageBucket: "calendar-project-vue.appspot.com",
  messagingSenderId: "104609845311",
  appId: "1:104609845311:web:18bb456eb68d36dfa8a88a"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
