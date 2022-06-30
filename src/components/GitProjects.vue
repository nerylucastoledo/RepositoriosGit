<template>
    <main class="container">
        <div v-if="cards.length">
            <div v-for="card in cards" :key="card.id">
                <router-link :to="{
                        name: 'detail',
                        params: {nome: card.owner.login, projeto: card.name}}"
                    >
                    <div class="card">
                        <img :src="card.owner.avatar_url" alt="Avatar"/>

                        <div class="name-description">
                            <h2>{{card.full_name}}</h2>

                            <p>{{card.description}}</p>
                        </div>

                        <span>></span>
                    </div>
                </router-link>
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

export default {
    components: { Paginacao },

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
            if (query === undefined || !query.length) {
                this.cards = []
            }

            var page = this.$route.query.page
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

.card {
    max-width: 950px;
    background-color: #49454F;
    margin: 32px auto 0;
    padding: 25px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #E6E1E5;
    border-radius: 12px;
    margin-bottom: 32px;
}

.card img {
    max-width: 70px;
    max-height: 72px;
    border-radius: 12px;
}

.name-description {
    margin-left: 32px;
    max-width: 740px;
    width: 100%;
    margin-right: 30px;
}

.name-description h2 {
    margin-bottom: 25px;
}

.card span {
    font-size: 28px;
}

</style>