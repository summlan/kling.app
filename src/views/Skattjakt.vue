<template>
<div>
  <div class="bg-image w-full">
    <h1 class="blackpearl text-yellow-600 text-shadow text-5xl font-bold w-full text-center">Skattjakt!</h1>
    <div class="flex justify-center items-center">
      <div class="mr-4">
        <button class="focus:outline-none">
          <svg class="w-24 text-yellow-600 hover:text-yellow-500 fill-current filter-shadow" viewBox="0 0 20 20"><path class="" d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/></svg>
        </button>
      </div>
      <img style="height: 300px; width: 600px" class="rounded-lg overflow-hidden border-2 border-black object-cover object-center" src="~@/assets/treasuremap.jpg" alt="test">
      <div class="ml-4">
        <button class="focus:outline-none">
          <svg class="w-24 text-yellow-600 hover:text-yellow-500 fill-current filter-shadow" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
        </button>
        </div>
    </div>
    <div class="p-4 text-center">
      <button class="focus:outline-none mx-2">
        <svg class="w-6 text-yellow-600 hover:text-yellow-500 fill-current filter-shadow" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
      </button>
      <button class="focus:outline-none mx-2">
        <svg class="w-6 text-yellow-600 hover:text-yellow-500 fill-current filter-shadow" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
      </button>
      <button class="focus:outline-none mx-2">
        <svg class="w-6 text-yellow-600 hover:text-yellow-500 fill-current filter-shadow" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
      </button>

    </div>
  </div>
    <p class="text-2xs">Photo by N. on Unsplash</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'skattjakt'

})
</script>

<style scoped>
.bg-image {
  background-image: url('~@/assets/treasuremap.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.text-shadow {
  text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
}

.blackpearl {
  font-family: 'BlackPearl','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.text-2xs {
  font-size: 0.60rem;
}

.filter-shadow {
  -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  /* Similar syntax to box-shadow */
}

.filter-shadow:active {
  -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3));
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3));
  /* Similar syntax to box-shadow */
}

</style>
