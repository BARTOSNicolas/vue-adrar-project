<script setup>
import {ref} from "vue";

const filmTitle = ref("")
const films = ref([])

const addFilm = () => {
  if (filmTitle.value) {
    if (films.value.includes(filmTitle.value)) {
      alert("Ce film existe déjà")
    }else {
      films.value.push(filmTitle.value)
    }
  }
}
const removeFilm = (index) => {
  if (films.value[index] !== undefined) {
    films.value.splice(index, 1)
  }
}

</script>

<template>
  <div class="container mx-auto p-8 flex flex-col gap-8 justify-center items-center">
    <div class="card bg-100 shadow-xl w-full p-8">
      <div class="card-body">
        <h2 class="card-title text-primary">Watch List (Les films à voir)</h2>
        <input type="text" class="input w-full" v-model="filmTitle">
        <button class="btn btn-primary" :disabled="!filmTitle" @click="addFilm">Ajouter à la liste</button>
        <div class="divider m-0" />
        <p v-if="films.length === 0">Pas encore de film dans votre liste ? Veuillez en ajouter un.</p>
        <ul v-else class="list max-h-128 overflow-y-auto">
          <li v-for="(film, index) in films" :key="index" class="list-row w-full flex justify-between items-center">
              <p class="text-lg">{{ index + 1 }} - {{ film }}</p>
              <button class="btn btn-error btn-xs btn-square text-white" @click="removeFilm(index)">X</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>