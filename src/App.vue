<template>
  <div class="antialiased">
     <site-header />
    <div class="container mx-auto">
        <router-view  />
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
    @apply bg-gray-900 text-gray-300;
  }
</style>
