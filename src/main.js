// Import Vue

import Firebase from 'firebase'
import '@/firebase';

import Vue from 'vue'


import VueFire from 'vuefire'

import * as VueGoogleMaps from 'vue2-google-maps'


// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
//import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
//import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
// OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'


// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

// Init F7 Vue Plugin


Vue.use(VueFire)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_Wj5XX5o_PHPxJJN6u8MXsNjHN0r4ef8',
    libraries: 'places'
  }
})

Vue.use(Framework7Vue)


// Init App
//Firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    el: '#app',
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
      root: '#app',
      /* Uncomment to enable Material theme: */
      material: true,
      routes: Routes,
      pushState: true
    },
    // Register App Component
    components: {
      app: App
    }
  });
//});
