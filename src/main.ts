import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCN5X8khGMI4p8jnEmVtbG4eXln-7GX_p8",
  authDomain: "push-notification-a4e21.firebaseapp.com",
  databaseURL: "https://push-notification-a4e21.firebaseio.com",
  projectId: "push-notification-a4e21",
  storageBucket: "push-notification-a4e21.appspot.com",
  messagingSenderId: "738256333845",
  appId: "1:738256333845:web:f67dcc296175e0a09e321c",
  measurementId: "G-VTS9G68SVG"
};
// 4. Get Firebase Configuration
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BGNQuwhDBr1Z41183sj9s95fRbqVvOhdGgFpD2GfjK1AyE3pZMsbUg2BDpYHIWxetLnf8W9lKbVfZ555AVFeYLo"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log("token", token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
