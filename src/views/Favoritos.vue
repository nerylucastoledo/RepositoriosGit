<template>
    <main class="container">
        <div class="info-git info-git-favoritos">
            <img src="../assets/logo.png" alt="Logo">
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

            <Paginacao :total="total" :porPagina="porPagina"/>
        </div>

        <div v-else class="not-found">
            <h1>Você ainda não tem favoritos :(</h1>
        </div>
    </main>
</template>

<script>

import Cards from '../components/Cards.vue'
import Paginacao from '../components/Paginacao.vue'

export default {

    components: {
        Cards,
        Paginacao,
    },

    data() {
        return {
            total: 0,
            porPagina: 12
        }
    },

    computed: {
        favoritos() {
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

.not-found {
    text-align: center;
    margin-top: 60px;
    color: #E6E1E5;
}

</style> 