<template>
    <main class="container">
        <div class="info-git info-git-favoritos">
            <img src="../assets/gitexplorer.png" alt="Logo">
            
            <p>GitRepo_Explorer</p>
        </div>

        <h1 class="title title-favoritos">Favoritos</h1>

        <div v-if="favoritos.length">
            <div v-for="(favorito, index) in favoritos" :key="favorito.id">
                <Cards 
                    :repositorio="favorito" 
                    :active="'active'" 
                    :index="index"
                />
            </div>
        </div>

        <div v-else class="not-found">
            <h1>Você ainda não tem favoritos :(</h1>
        </div>
    </main>
</template>

<script>

import Cards from '../components/Cards.vue'

export default {

    components: {
        Cards,
    },

    computed: {
        favoritos() {
            const favoritos = this.$store.state.favoritos
            this.total = favoritos
            return this.$store.state.favoritos
        }
    },
}
</script>

<style>

.title-favoritos{
    max-width: 950px;
    margin: 0 auto;
    text-align: initial;
}

.info-git-favoritos {
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;
}

.info-git p {
    color: #5b595d;
}

.not-found {
    text-align: center;
    margin-top: 60px;
    color: #E6E1E5;
}

</style> 