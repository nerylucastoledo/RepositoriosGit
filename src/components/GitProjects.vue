<template>
    <main class="container">
        <div v-if="cards">
            <div v-for="card in cards" :key="card.id">
                <router-link
                    :to="{
                        name: 'detail',
                        params: {name: card.owner.login, projeto: card.name}
                    }"

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
        </div>
        <div v-else class="setas">
            <img src="../assets/setas.png" alt="Setas">
        </div>
    </main>
</template>

<script>

export default {

    data() {
        return {
            cards: []
        }
    },

    computed: {
        url() {
            return this.$route.query.q
        }
    },

    watch: {
        url() {
            this.buscarRepositorio()
        }
    },

    methods: {
        async buscarRepositorio() {
            await fetch(`https://api.github.com/search/repositories?q=${this.url}`)
            .then(req => req.json())
            .then(res => this.cards = res.items)
        }
    },

    created() {
        document.title = 'Pesquisa'
    }
}
</script>

<style>

.setas img {
    display: block;
    margin: 0 auto;
}

.card {
    max-width: 950px;
    background-color: #49454F;
    margin: 0 auto;
    padding: 25px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #E6E1E5;
    border-radius: 12px;
    margin-bottom: 32px;
}

.card h2 {
    margin-bottom: 25px;
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

.card span {
    font-size: 28px;
}

</style>