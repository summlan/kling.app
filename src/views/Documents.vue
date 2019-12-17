<template>
  <div>
      <div>
          <div>
              <label class="text-sm" for="title">Title</label>
              <input class="ml-2 border"  name="title" type="text" v-model="newPost.title">
          </div>
            <div class="mt-2">
                <label class="text-sm" for="description">Description</label>
                <input class="ml-2 border" name="description" type="text" v-model="newPost.description">
            </div>
          <button class="bg-pink-900 text-white focus:outline-none px-1 mt-2 hover:bg-pink-800 active:bg-pink-600 rounded-sm">Save</button>
      </div>
      <hr class="my-4" />
      <div v-for="document in documents$" :key="document.title">
          <h1>{{document.title}}</h1>
          <p>{{document.description}}</p>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { documents$ } from '@/firebaseConfig'

export default Vue.extend({
  name: 'documents',
  data () {
    return {
      newPost: {
        title: null,
        description: null
      }
    }
  },
  subscriptions () {
    return {
      documents$
    }
  }
})
</script>

<style>

</style>
