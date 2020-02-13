import firebase from 'firebase/app'

import 'firebase/functions'

export const config = {
  apiKey: 'AIzaSyBXkzSwGiOGWbtBdbOY8OiWixu_ZgChhtE',
  authDomain: 'nuxt-portfolio-8b1de.firebaseapp.com',
  databaseURL: 'https://nuxt-portfolio-8b1de.firebaseio.com',
  projectId: 'nuxt-portfolio-8b1de',
  storageBucket: 'nuxt-portfolio-8b1de.appspot.com',
  messagingSenderId: '998350722847',
  appId: '1:998350722847:web:fee8d877fd8caf600c022a',
  measurementId: 'G-51KYMFXE8K'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const functions = firebase.functions()
