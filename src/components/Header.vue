<script setup>
import router from "../router.js";
const routes = router.getRoutes().filter(r => !r.aliasOf).map(r => {
  return { path: r.path, name: r.name}
})
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl">Mon super site</RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-for="route in routes" :key="route.path">
          <RouterLink :to="route.path" activeClass="bg-primary">{{ route.name}}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>