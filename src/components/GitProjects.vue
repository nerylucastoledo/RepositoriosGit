<template>
    <main class="container">
        <div v-if="cards.length">
            <div v-for="card in cards" :key="card.id">
                <Cards 
                    :nome="card.owner.login" 
                    :projeto="card.name" 
                    :fullName="card.full_name" 
                    :avatar="card.owner.avatar_url"
                    :description="card.description"
                />
            </div>
            <Paginacao :total="total" :porPagina="porPagina"/>
        </div>
        <div v-else class="setas">
            <img src="../assets/setas.png" alt="Setas">
        </div>

        <Footer />
    </main>
</template>

<script>
import Paginacao from "./Paginacao.vue";
import Cards from "./Cards.vue";
import Footer from "./Footer.vue";

export default {
    components: { Paginacao, Cards, Footer },

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

        favoritar() {
            console.log('favoritar')
        }
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

</style>