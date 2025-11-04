<script setup>
import {onBeforeMount, onMounted, ref} from "vue";

const loadingPokemon = ref(true)
const loadingMeteo = ref(true)

const apiPokemon = "https://pokeapi.co/api/v2/pokemon/"
const pokemons = ref([])

const apiMeteo = "https://prevision-meteo.ch/services/json/toulouse"
const city = ref("")
const tempAct = ref(0)
const tempMin = ref(0)
const tempMax = ref(0)
const condition = ref("")

onBeforeMount(async() => {
  await getPokemon()
  await getMeteo()
  console.log("Before Mount")
})

onMounted(() => {
  console.log("Mounted")
})

async function getPokemon() {
  try {
    const response = await fetch(apiPokemon)
    const data = await response.json()
    //console.log(data.results.map(p => p.name))
    pokemons.value = data.results.map(p => p.name)
    loadingPokemon.value = false
    console.log("Pokemon added")
  } catch (e) {
    console.error(e)
  }
}

async function getMeteo() {
  try {
    const response = await fetch(apiMeteo)
    const data = await response.json()
    //console.log(data)
    city.value = data.city_info.name
    tempAct.value = data.current_condition.tmp
    condition.value = data.current_condition.condition
    tempMin.value = data.fcst_day_0.tmin
    tempMax.value = data.fcst_day_0.tmax
    loadingMeteo.value = false
    console.log("Meteo added")
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="container mx-auto p-8 flex flex-col gap-8 justify-center items-center">
    <div class="card bg-100 shadow-xl w-full p-8">
      <div class="card-title">
        <h2 class="text-2xl text-secondary">Pokemons : </h2>
      </div>
      <div v-if="loadingPokemon" class="card-body flex justify-center items-center">
        <span class="loading loading-spinner loading-xl"></span>
      </div>
      <div v-else class="card-body flex flex-row flex-wrap gap-2">
        <div v-for="(pokemon, index) in pokemons" :key="index" class="badge badge-primary">{{ pokemon }}</div>
      </div>
    </div>
    <div class="card bg-100 shadow-xl w-full p-8">
      <div class="card-title">
        <h2 class="text-2xl text-secondary">Météo : {{ loadingMeteo ? "..." : city }}</h2>
      </div>
      <div v-if="loadingMeteo" class="card-body flex justify-center items-center">
        <span class="loading loading-spinner loading-xl"></span>
      </div>
      <div v-else class="card-body">
        <p class="card shadow-xl flex-row justify-between items-center text-xl p-2 mb-4">Condition : <span class="font-bold text-primary">{{ condition }}</span></p>
        <p class="card shadow-xl flex-row justify-between items-center text-xl p-2 mb-4">Température actuelle : <span class="font-bold text-primary">{{ tempAct }}°</span></p>
        <p class="card shadow-xl flex-row justify-between items-center text-xl p-2 mb-4">Température minimal : <span class="font-bold text-primary">{{ tempMin }}°</span></p>
        <p class="card shadow-xl flex-row justify-between items-center text-xl p-2">Température maximal : <span class="font-bold text-primary">{{ tempMax }}°</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>