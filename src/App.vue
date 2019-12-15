<template>
  <div class="antialiased">
     <site-header />
    <div class="container mx-auto px-4 py-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { firestore, GoogleAuthProvider, auth } from '@/firebaseConfig'
import router from './router'
import SiteHeader from '@/components/SiteHeader.vue'

export default Vue.extend({
  name: 'app',
  components: {
    SiteHeader
  },
  data () {
    return {
      documents: [],
      isOpen: true
    }
  },
  methods: {
    signInWithGoogle () {
      auth.signInWithPopup(new GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' }))
        .then((credentials) => {
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signOut () {
      auth.signOut()
        .then(() => {
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
</script>

<style>
  @tailwind base;
  @tailwind components;

  @tailwind utilities;

  @font-face {
    font-family: BlackPearl;
    src: url('~@/assets/BlackPearl.ttf') format('truetype');
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
</style>
