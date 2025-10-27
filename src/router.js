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
        {path: "/exercices", name: "Exercices", children: [
                {path: "exo-ref", name: "Exo Ref", component: () => import("./Exos/ExoRef.vue")},
                {path: "exo-binding", name: "Exo Binding", component: () => import("./Exos/ExoBinding.vue")},
            ]},
        {path: "/lessons", name: "Leçons", children: [
                {path: "text-interpolation", name: "Text interpolation", component: () => import("./Lessons/TextInterpolation.vue")},
                {path: "inline-templating", name: "Inline templating", component: () => import("./Lessons/inline-templating.vue")},
                {path: "attribute-binding", name: "Attribute Binding", component: () => import("./Lessons/attribute-binding.vue")},
            ]},
        {
            path: '/links',
            name: 'Liens',
            // Mode Lazy Loading
            // Composant a afficher sans l'import
            // Ameliore le cache et le chargement rapide
            component: () => import('./views/Links.vue')
        },
        {
            // Version minimal
            path: '/about', name: "About", component: About
        },
    ]
})

export default router;