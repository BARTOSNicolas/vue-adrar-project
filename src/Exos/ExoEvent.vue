<script setup>
import {ref} from "vue";
const number = ref(0)

function increment(size = 99) {
  number.value += size
}
function decrement(size = 11) {
  number.value -= size
}

function reset() {
  number.value = 0
}

</script>

<template>
  <div class="container mx-auto p-8 flex justify-center items-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">Event Binding + Event modifiers</h2>
        <p class="text-secondary pb-8">Click gauche -11, +99, Click droit -99, +11</p>
        <div class="flex justify-center items-center">
        <button
            class="btn btn-primary font-bold"
            @click="decrement()"
            @click.prevent.right="decrement(99)"
        >-</button>
          <p class="text-center font-bold text-lg">Le Nombre : {{ number }}</p>
        <button
            class="btn btn-secondary font-bold"
            @click="increment()"
            @click.prevent.right="increment(11)"
        >+</button>
        </div>
        <div class="flex justify-center items-center">
          <button
              class="btn btn-neutral font-bold"
              @click="reset()"
          >Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>