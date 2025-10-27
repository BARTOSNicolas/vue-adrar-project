<script setup>
import {ref} from "vue";

const unLivre = ref("Les mémoires de Steven Seagal")
const isOnline = ref(false)
const unNombre = ref(1234567890)
const unTableau = ref(["Du texte", 99])
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
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
      <tr>
        <th class="text-teal-300">Valeur</th>
        <th class="text-teal-300">Variable</th>
      </tr>
      </thead>
      <tbody>
      <!-- row 1 -->
      <tr>
        <td>unLivre</td>
        <td>{{ unLivre }}</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <td>unNombre</td>
        <td>{{ unNombre }}</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <td>isOnline</td>
        <td>{{ isOnline ? "Est en ligne" : "N'est pas en ligne" }}</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <td>unTableau</td>
        <td>{{ unTableau }}</td>
      </tr>
      <!-- row 5 -->
      <tr>
        <td>unTableau[0]</td>
        <td>{{ unTableau[0] }}</td>
      </tr>
      <!-- row 6 -->
      <tr>
        <td>unObjet</td>
        <td>{{ unObjet }}</td>
      </tr>
      <!-- row 7 -->
      <tr>
        <td>unObjet.name</td>
        <td>{{ unObjet.name }}</td>
      </tr>
      <!-- row 8 -->
      <tr>
        <td>unObjet["name"]</td>
        <td>{{ unObjet["name"] }}</td>
      </tr>
      <!-- row 9 -->
      <tr>
        <td>unObjet.tel</td>
        <td>{{ unObjet.tel }}</td>
      </tr>
      <!-- row 10 -->
      <tr>
        <td>fonctionTest() variable</td>
        <td>{{ fonctionTest()  }}</td>
      </tr>
      <!-- row 10 -->
      <tr>
        <td>fonctionTest() inline</td>
        <td>{{ (() => "Hello World")() }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style scoped>

</style>