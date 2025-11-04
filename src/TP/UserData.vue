<script setup>
import {ref} from "vue";
  const userName = ref("")
  const userAge = ref(null)

  const count = ref(0)

  const emit = defineEmits(["updateEmit"])
  const updateUser = (name, age) => {
    if (name && age) {
      emit("updateEmit", name, age)
    } else {
      count.value++
      console.log(count.value)
      window.alert(count.value >= 3 ? "t'es con ou quoi ? remplis TOUS les champs !! T.O.U.S" : "remplis tous les champs...")
    }
  }

</script>

<template>
  <div class="card bg-secondary shadow-xl w-96 p-8 text-white flex flex-col gap-4">
    <h2 class="text-2xl font-black text-center">Composant Data</h2>
    <div>
      <label for="name">Ton nom</label>
      <input type="text" class="input" placeholder="Entre ton nom" v-model="userName"/>
    </div>
    <div>
      <label for="age">Ton âge</label>
      <input type="number" class="input" placeholder="Entre ton age" v-model="userAge"/>
    </div>
    <button class="btn btn-accent" @click="updateUser(userName, userAge)">Mettre à jour</button>
  </div>
</template>

<style scoped>

</style>