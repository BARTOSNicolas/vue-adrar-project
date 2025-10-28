<script setup>
import {ref, watch} from "vue";

const isActive3 = ref(false)
const isActive4 = ref(false)

const isHello = ref(false)
const isWorld = ref(false)

const showH2 = ref(false)

const color = ref("")

const checkHello = (e) => {
  isHello.value = false
  isWorld.value = false
  let sentence = e.target.value.toLowerCase()
  if (sentence.includes("hello")) {
    isHello.value = true
  }
  if (sentence.includes("world")) {
    isWorld.value = true
  }
}

const clickMe = (event, style) => {
  event.target.parentElement.classList.toggle(style)
}
</script>

<template>
  <div class="container mx-auto p-8 flex flex-col gap-8 justify-center items-center">
    <div class=" card bg-100 shadow-xl p-8 w-full grid grid-cols-2 gap-4 place-items-center">
      <div class="card w-32 h-24 shadow-xl flex justify-center items-center">
        <button class="btn" @click="(e) => clickMe(e,'style1')">Click Me</button>
      </div>
      <div class="card w-32 h-24 shadow-xl flex justify-center items-center">
        <button class="btn" @click="(e) => clickMe(e,'style2')">Click Me</button>
      </div>
      <div class="card w-32 h-24 shadow-xl flex justify-center items-center" :style="{backgroundColor: isActive3 ? 'rebeccapurple' : ''}">
        <button class="btn" @click="isActive3 = !isActive3">Click Me</button>
      </div>
      <div class="card w-32 h-24 shadow-xl flex justify-center items-center" :style="{backgroundColor: isActive4 ? 'greenyellow' : ''}">
        <button class="btn" @click="isActive4 = !isActive4">Click Me</button>
      </div>
    </div>

    <div class=" card bg-100 shadow-xl w-full p-8">
      <div>
      <input type="text" placeholder="Type here" class="input" @input="checkHello" />
        <h2 class="p-2" :class="{ maClasseHello: isHello, maClasseWorld: isWorld, hidden: showH2 }">HelloWorld (class dynamique)</h2>
      </div>
      <div>
        <input type="text" placeholder="Type here" class="input" v-model="color"/>
        <h2 class="p-2" :style="{backgroundColor: color}">HelloWorld (couleur dynamique)</h2>
      </div>
      <button class="btn btn-primary" @click="showH2 = !showH2">{{ showH2 ? "show H2" : "hide H2" }}</button>
    </div>
  </div>
</template>

<style scoped>
.style1 {
  background-color: deeppink;
  color: greenyellow;
}
.style2 {
  background-color: teal;
}

.maClasseHello {
  background-color: rebeccapurple;
}
.maClasseWorld {
  color: greenyellow;
}

</style>