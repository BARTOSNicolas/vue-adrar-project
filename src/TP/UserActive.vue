<script setup>
import {ref} from "vue";
const loading = ref(true)
const props = defineProps({
  user: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    }
  }
})
</script>

<template>
  <div class="card bg-primary shadow-xl w-96 p-8 text-white flex flex-col gap-4 text-center">
    <h2 class="text-2xl font-black">Composant Active</h2>
    <p v-show="user.name" class="text-xl font-bold">{{ user.name }}</p>
    <p v-show="user.age" class="text-xl italic">{{ user.age }} ans</p>
  </div>
</template>

<style scoped>

</style>