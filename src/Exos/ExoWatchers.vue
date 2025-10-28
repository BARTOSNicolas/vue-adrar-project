<script setup>
import {ref, watch} from "vue";
const number = ref(0)

const updateNumber = () => {
  number.value++
}

watch(number, (newValue) => {
  if (newValue > 9) {
    number.value = 0
  }
})

</script>

<template>
  <div class="container mx-auto p-8 flex flex-col gap-8 justify-center items-center">
    <div class="card bg-base-100 shadow-xl flex flex-row gap-4 items-center justify-center">
      <h2 class="text-2xl">{{ number }}</h2>
      <button class="btn btn-primary btn-square font-bold" @click="updateNumber">+</button>
    </div>
  </div>
</template>

<style scoped>

</style>