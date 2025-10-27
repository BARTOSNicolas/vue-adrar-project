<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

// 1. accès aux infos du router
const router = useRouter()
const route = useRoute()

// 2. on construit la liste routes avec enfants regroupés
const routes = computed(() => {
  const all = router.getRoutes()
      .filter(r => !r.aliasOf && r.name)
      .map(r => ({ path: r.path, name: r.name }))

  // parents = ceux qui ne sont pas eux-mêmes enfants de quelqu'un d'autre
  return all
      .filter(p => !all.some(c => c !== p && p.path.startsWith(c.path + '/')))
      .map(p => ({
        ...p,
        children: all.filter(c => c !== p && c.path.startsWith(p.path + '/'))
      }))
})

// 3. savoir si un parent est "actif" parce qu'on est sur un de ses enfants
const isParentActive = (parent) => {
  return parent.children.some(child =>
      route.path === child.path || route.path.startsWith(child.path + '/')
  )
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm z-20">
    <div class="flex-1">
      <RouterLink to="/" class="text-xl font-bold px-8">
        Apprendre Vue.JS
      </RouterLink>
    </div>

    <div class="flex-2">
      <ul class="menu menu-horizontal px-1">
        <li v-for="r in routes" :key="r.path">
          <!-- Cas parent avec enfants -->
          <details v-if="r.children && r.children.length">
            <summary
                class="cursor-pointer px-2 py-1 rounded"
                :class="{ 'text-primary': isParentActive(r) }"
            >
              {{ r.name }}
            </summary>

            <ul class="bg-base-100 rounded-t-none p-2 shadow">
              <li v-for="child in r.children" :key="child.path">
                <RouterLink
                    :to="child.path"
                    active-class="text-primary"
                    class="block px-2 py-1 rounded"
                >
                  {{ child.name }}
                </RouterLink>
              </li>
            </ul>
          </details>

          <!-- Cas route sans enfants -->
          <RouterLink
              v-else
              :to="r.path"
              active-class="text-primary"
              class="px-2 py-1 rounded"
          >
            {{ r.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>