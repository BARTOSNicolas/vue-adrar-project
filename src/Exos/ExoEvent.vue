<script setup>
import {ref, computed} from "vue";
const number = ref(0)
const text = ref("")
const text2 = ref("")

function increment(size = 99) {
  number.value += size
}
function decrement(size = 11) {
  number.value -= size
}

function reset() {
  number.value = 0
}

function updateText(e) {
  if (e.target.value) {
    text.value = e.target.value
  }
}

function updateTextWithEscape(e) {
  if (e.key === "Escape") {
    text2.value = e.target.value
  }
}

</script>

<template>
  <div class="container mx-auto p-8 flex flex-col gap-8 justify-center items-center">
    <!-- Exo Click-->
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">v-on:click ou @click</h2>
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
    <!-- Exo Input with KeyUp -->
    <div class="card bg-base-100 w-full shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary pb-4">v-on:key-up ou @key</h2>
        <p class="text-secondary">Entrée du texte</p>
        <input type="text" placeholder="Entrez du texte ici" class="input" @keyup="updateText"/>
        <div class="card w-full bg-base-300 card-xs shadow-sm">
          <div class="card-body">
            <p class="text-lg">Le contenu de l'input : <span class="badge badge-accent">{{ text }}</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- Exo Input with KeyUp + Escape -->
    <div class="card bg-base-100 w-full shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary pb-4">v-on:key-up ou @key + Escape</h2>
        <p class="text-secondary">Entrée du texte et appuyer sur Escape pour afficher</p>
        <input type="text" placeholder="Entrez du texte ici" class="input" @keyup="updateTextWithEscape"/>
        <div class="card w-full bg-base-300 card-xs shadow-sm">
          <div class="card-body">
            <p class="text-lg">Valeur confirmée par echap: <span class="badge badge-success">{{ text2 }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>