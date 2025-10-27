<script setup>
import {computed, ref} from 'vue'
// Import des props du parent (attributs)
defineProps({
  msg: String,
})
// Variable/Constante avec Ref
const count = ref(0)
// Variable avec Computed
let changeColor = computed(() => {
  return count.value < 10 ? "btn-primary" : "btn-secondary"
})
</script>

<template>
  <div class="container mx-auto flex justify-center items-center">
    <div class="card bg-base-100 w-96 shadow-xl p-8">
      <h1 class="title text-4xl text-center pb-8">{{ msg }}</h1>
      <button
          type="button"
          @click="count++"
          class="btn"
          :class="changeColor">count is {{ count }}</button>
    </div>
  </div>
</template>

<style scoped>
  .title {
    color: teal;
  }
</style>
