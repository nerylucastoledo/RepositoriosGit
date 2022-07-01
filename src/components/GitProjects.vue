<template>
    <main class="container">
        <div v-if="cards.length">
            <div v-for="(card, index) in cards" :key="card.id">
                <Cards 
                    :repositorio="card" 
                    :index="index" 
                />
            </div>
            
            <Paginacao :total="total" :porPagina="porPagina"/>
        </div>

        <div v-else class="setas">
            <img src="../assets/setas.png" alt="Setas">
        </div>
    </main>
</template>

<script>

import Paginacao from "./Paginacao.vue";
import Cards from "./Cards.vue";

export default {
    components: { 
        Paginacao, 
        Cards
    },

    data() {
        return {
            cards: [],
            total: 0,
            porPagina: 12
        }
    },

    computed: {
        url() {
            var query = this.$route.query.q
            var page = this.$route.query.page

            if (query === undefined || !query.length) {
                this.cards = []
            }

            return `?q=${query}&page=${page}&per_page=${this.porPagina}`
        }
    },

    watch: {
        url() {
            if (this.$route.query.q) {
                this.buscarRepositorio()
            }
        }
    },

    methods: {
        async buscarRepositorio() {
            await fetch(`https://api.github.com/search/repositories${this.url}`)
            .then(req => req.json())
            .then(res => {
                this.cards = res.items
                this.total = res.total_count
                window.scrollTo({ top: 0, behavior: 'smooth' })
            })
        },
    },

    created() {
        document.title = "Pesquisa";
    },
}
</script>

<style>

.setas img {
    display: block;
    margin: 100px auto 0;
}

@media (max-width: 450px) {
    .setas {
        margin-bottom: 30px;
    }
}

</style>