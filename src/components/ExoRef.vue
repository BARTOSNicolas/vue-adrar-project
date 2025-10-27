<script setup>
import {ref} from "vue";

const variable = "Valeur"
const unLivre = ref("Les mémoire de Steven Seagal")
const isOnline = ref(false)
const unNombre = ref(1234567890)
const unTableau = (ref["du texte", 99])
const unObjet = ref({
  name: "COOL",
  tel: "060503032"
})
const fonctionTest = ref(() => {
  return "Hello World"
})

</script>

<template>
<div class="container mx-auto p-8">
  <p>{{ variable }}</p>
  <p>{{ unLivre }}</p>
  <p>{{ isOnline ? "Est en ligne" : "N'est pas en ligne" }}</p>
  <p>{{ unNombre }}</p>
  <p v-for="item in unTableau" :key="item">{{ item }}</p>
  <p>{{ unObjet.name }}</p>
  <p>{{ unObjet.tel }}</p>
  <p>{{ fonctionTest() }}</p>
  <p>{{ (() => "Hello World")() }}</p>
</div>
</template>

<style scoped>

</style>