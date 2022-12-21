export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client'],
    css: [
        "assets/global.css",
    ],
    runtimeConfig: {
        public: {
            GQL_HOST: 'http://127.0.0.1:8000/graphql'
        }
    }
})
