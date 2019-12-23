<template>
  <div class="antialiased">
     <site-header />
    <div class="container mx-auto">
        <router-view  />
    </div>
  </div>
</template>

<script lang="ts">
import { firestore, GoogleAuthProvider, auth } from '@/firebaseConfig'
import router from './router'
import SiteHeader from '@/components/SiteHeader.vue'

import { createComponent, ref } from '@vue/composition-api'
import Character from './interfaces/Character'
import CharacterService from './services/CharacterService'

export default createComponent({
  name: 'app',
  components: { SiteHeader },
  setup () {
    const characterService = new CharacterService()
    const characters = ref<Character[]>([])

    const fetchData = async (): Promise<void> => {
      characters.value = await characterService.FetchCharacters()
    }
    fetchData()
    return {
      characters
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
