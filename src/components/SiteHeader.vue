<template>
  <header class="bg-pink-900">
    <div class="container mx-auto sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-between px-4 py-3">
        <div class="text-pink-600 font-semibold text-lg">Kling</div>
        <div class="flex sm:hidden">
          <button @click="toggle" type="button" class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
            <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav class="sm:flex sm:items-center sm:px-4" :class="isOpen ? 'block': 'hidden'">
        <div class="sm:flex sm:items-center">
          <div class="px-2 pt-2 pb-5 border-b border-pink-600 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
            <router-link exact to="/" class="block px-3 py-1 rounded font-semibold text-white hover:bg-pink-600 sm:text-sm sm:px-2">Home</router-link>
            <router-link exact to="/skattjakt" class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-pink-600 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2">Skattjakt</router-link>
            <router-link exact to="/letters" class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-pink-600 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2">Bokstäver</router-link>
          </div>
          <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
            <div class="flex items-center sm:hidden mb-5">
              <img v-if="currentUser$" class="h-10 w-10 object-cover rounded-full border-2 border-pink-600" :src="currentUser$.photoURL">
              <span v-if="currentUser$" class="ml-4 font-semibold text-gray-200 sm:hidden">{{currentUser$.displayName}}</span>
            </div>
            <div class="sm:hidden">
              <a v-if="!currentUser$" @click="signInWithGoogle" class="block text-gray-200 hover:text-pink-600">Sign in with Google</a>
              <a v-if="currentUser$" href="#account" class="block text-gray-200 hover:text-pink-600">Account settings</a>
              <a v-if="currentUser$" @click="signOut" class="mt-3 block text-gray-200 hover:text-pink-600">Sign out</a>
            </div>
            <Dropdown class="hidden sm:block">
              <template #trigger="{ hasFocus, isOpen }">
                <span class="block h-8 w-8 overflow-hidden rounded-full border-2" :class="[(hasFocus || isOpen) ? 'border-white' : 'border-pink-800']">
                  <svg v-if="!currentUser$" class="w-full h-full text-white fill-current" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>
                  <img v-if="currentUser$" class="h-full w-full object-cover" :src="currentUser$.photoURL">
                </span>
              </template>
              <template #dropdown>
                <div class="mt-1 bg-white rounded-lg w-48 py-2 shadow-lg border">
                  <button type="button" v-if="!currentUser$" @click="signInWithGoogle" class=" w-full text-left hover:text-white text-gray-800 px-4 py-2 hover:bg-pink-700">Sign in with Google</button>
                  <button type="button" v-if="currentUser$" class="w-full text-left hover:text-white text-gray-800 px-4 py-2 hover:bg-pink-700">Account settings</button>
                  <button type="button" v-if="currentUser$" @click="signOut" class=" w-full text-left hover:text-white text-gray-800 mt-0 px-4 py-2 hover:bg-pink-700">Sign out</button>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown'
import { firestore, GoogleAuthProvider, auth, currentUser$ } from '@/firebaseConfig'

export default {
  components: { Dropdown },
  props: [],
  data () {
    return {
      isOpen: false
    }
  },
  subscriptions () {
    return {
      currentUser$
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    signInWithGoogle () {
      auth.signInWithPopup(new GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' }))
        .then((credentials) => {
        })
        .catch((err) => {
          return err
        })
    },
    signOut () {
      auth.signOut()
        .then(() => {
        })
        .catch((err) => {
          return err
        })
    }
  }
}
</script>
