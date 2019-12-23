<template>
  <div class="p-4">
    <h1 class="text-2xl">Allt möjligt roligt.</h1>
    <ul>
      <li v-for="character in characters" :key="character.name">
        <p>{{character.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import Character from '@/interfaces/Character'
import CharacterService from '@/services/CharacterService'

export default createComponent({
  name: 'home',
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
