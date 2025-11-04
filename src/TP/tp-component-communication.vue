<script setup>
  import UserActive from "./UserActive.vue";
  import UserData from "./UserData.vue";
  import {ref} from "vue";

  const user = ref({
    name: "",
    age: null
  })

  const updateUser = (name, age) => {
    user.value.name = name
    user.value.age = age
  }

</script>

<template>
  <div class="container mx-auto h-screen w-screen flex justify-center items-center">
    <div class="flex flex-col gap-4">
      <UserActive :user="user"/>
      <UserData @update-emit="updateUser"/>
    </div>
  </div>
</template>

<style scoped>

</style>