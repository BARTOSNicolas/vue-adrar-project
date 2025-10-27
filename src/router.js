import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            // Chemin
            path: '/',
            // Alias en option
            alias: '/home',
            // Nom de la route
            name: 'Home',
            // Composant a afficher avec import
            component: Home
        },
        {
            path: '/contact',
            name: 'Contact',
            // Mode Lazy Loading
            // Composant a afficher sans l'import
            // Ameliore le cache et le chargement rapide
            component: () => import('./views/Contact.vue')
        },
        {
            // Version minimal
            path: '/about', name: "About", component: About
        },
        {path: "/exoref", name: "ExoRef", component: () => import("./components/ExoRef.vue")}
    ]
})

export default router;