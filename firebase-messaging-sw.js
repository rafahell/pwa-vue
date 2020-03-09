// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}

importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
    messagingSenderId: '738256333845',
    apiKey: "AIzaSyCN5X8khGMI4p8jnEmVtbG4eXln-7GX_p8",
    authDomain: "push-notification-a4e21.firebaseapp.com",
    databaseURL: "https://push-notification-a4e21.firebaseio.com",
    projectId: "push-notification-a4e21",
    storageBucket: "push-notification-a4e21.appspot.com",
    messagingSenderId: "738256333845",
    appId: "1:738256333845:web:f67dcc296175e0a09e321c",
    measurementId: "G-VTS9G68SVG"
});



// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]