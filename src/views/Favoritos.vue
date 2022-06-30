<template>
    <main class="container">

        <div class="info-git info-git-favoritos">
            <img src="../assets/logo.png" alt="Logo">
            <p>GitRepo_Explorer</p>
        </div>

        <h1 class="title title-favoritos">Favoritos</h1>

        <div v-if="favoritos.length">
            <div v-for="favorito in favoritos" :key="favorito.id">
                <Cards 
                    :nome="favorito.owner.login" 
                    :projeto="favorito.name" 
                    :fullName="favorito.full_name" 
                    :avatar="favorito.owner.avatar_url"
                    :description="favorito.description"
                    :repositorio="favorito"
                />
            </div>
            <Paginacao :total="total" :porPagina="porPagina"/>
        </div>
        
        <Footer />
    </main>
</template>

<script>

import Cards from '../components/Cards.vue'
import Paginacao from '../components/Paginacao.vue'
import Footer from '@/components/Footer.vue'

export default {

    components: {
    Cards,
    Paginacao,
    Footer
},

    data() {
        return {
            favoritos: [],
            total: 0,
            porPagina: 12
        }
    },
    
    methods: {
        pegarFavoritos() {
            this.favoritos = this.$store.state.favoritos
            this.total = this.favoritos.length
        }
    },

    created() {
        this.pegarFavoritos()
    }
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


</style> 