<script setup>

</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Mon super site</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><a>Lien 3</a></li>
        <li><a>Lien 4</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>