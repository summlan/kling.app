import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/performance'
import 'firebase/analytics'
import { authState } from 'rxfire/auth'
import { collectionData } from 'rxfire/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDhLjxhikPVNXFA-Oe72Dc_nTD0XrBWngA',
  authDomain: 'kling-app.firebaseapp.com',
  databaseURL: 'https://kling-app.firebaseio.com',
  projectId: 'kling-app',
  storageBucket: 'kling-app.appspot.com',
  messagingSenderId: '704087155854',
  appId: '1:704087155854:web:4a6561c1a3230f0f1d95df',
  measurementId: 'G-95QX5GLM1J'
}

firebase.initializeApp(firebaseConfig)

// firebase utils
const firestore = firebase.firestore()
const auth = firebase.auth()
const GoogleAuthProvider = firebase.auth.GoogleAuthProvider
const FacebookAuthProvider = firebase.auth.FacebookAuthProvider
const { Timestamp, GeoPoint } = firebase.firestore

const performance = firebase.performance()
const analytics = firebase.analytics()

// rxfire
const documents$ = collectionData(firestore.collection('documents'))
const currentUser$ = authState(auth)

export {
  firestore,
  firebase,
  auth,
  Timestamp,
  GeoPoint,
  GoogleAuthProvider,
  documents$,
  currentUser$
}
