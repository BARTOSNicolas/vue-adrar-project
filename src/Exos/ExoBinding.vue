<script setup>
import {ref} from "vue";

const name = ref("Mario")
const age = ref(30)
const image = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg'
const feticheNumber = ref(random())

function updateAge() {
  return age.value + 10
}

function random() {
  return Math.floor(Math.random() * 999999) + 1;
}

function updateFeticheNumber() {
  feticheNumber.value = random()
}

</script>

<template>
  <div class="container mx-auto flex justify-center items-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure class="px-10 pt-10">
        <img
            :src="image"
            alt="Mario"
            class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ name || "Pas de nom" }}</h2>
        <input type="text" v-model="name" class="input" />
        <p>Âge : <span class="badge badge-primary">{{age}} ans</span></p>
        <p>Âge + 10 : <span class="badge badge-secondary">{{updateAge()}} ans</span></p>
        <p>Nb Fétiche: <span class="badge badge-accent mr-2">{{ feticheNumber }}</span> <span class="btn btn-xs btn-warning" @click="() => {updateFeticheNumber()}">Change</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>