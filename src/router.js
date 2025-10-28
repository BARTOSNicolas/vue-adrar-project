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
            name: 'Accueil',
            // Composant a afficher avec import
            component: Home
        },
        // Avec composants Enfants
        {path: "/exercices", name: "Exercices", children: [
                {path: "exo-ref", name: "Exo Ref", component: () => import("./Exos/ExoRef.vue")},
                {path: "exo-binding", name: "Exo Binding", component: () => import("./Exos/ExoBinding.vue")},
                {path: "exo-event", name: "Exo Event", component: () => import("./Exos/ExoEvent.vue")},
                {path: "exo-watchers", name: "Exo Watchers", component: () => import("./Exos/ExoWatchers.vue")},
                {path: "exo-dynamic-style", name: "Exo Dynamic Style", component: () => import("./Exos/ExoDynamicStyle.vue")},
                {path: "exo-vif-vfor", name: "Exo Vif Vfor", component: () => import("./Exos/ExoVifVfor.vue")},
            ]},
        {path: "/lessons", name: "Leçons", children: [
                {path: "text-interpolation", name: "Text interpolation", component: () => import("./Lessons/TextInterpolation.vue")},
                {path: "inline-templating", name: "Inline templating", component: () => import("./Lessons/Inline-templating.vue")},
                {path: "attribute-binding", name: "Attribute Binding", component: () => import("./Lessons/Attribute-binding.vue")},
                {path: "event-binding", name: "Event Binding", component: () => import("./Lessons/Event-binding.vue")},
                {path: "two-way-binding", name: "Two Way Binding", component: () => import("./Lessons/Two-way-binding.vue")},
                {path: "computed-properties", name: "Computed Properties", component: () => import("./Lessons/Computed-properties.vue")},
                {path: "watchers", name: "Watchers", component: () => import("./Lessons/Watchers.vue")},
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
            path: '/about', name: "A Propos", component: About
        },
    ]
})

export default router;