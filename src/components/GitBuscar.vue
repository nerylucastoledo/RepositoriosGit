<template>
    <form class="form-buscar">
        <input 
            v-model="pesquisar" 
            type="text" 
            id="pesquisa" 
            placeholder="Fique a vontade para pesquisar da forma que preferir..."
        >
        
        <input type="submit" class="icon-lupa" @click.prevent="buscarProdutos"/>
    </form>
</template>

<script>

export default {

    data() {
        return {
            pesquisar: ""
        }
    },

    methods: {
        buscarProdutos() {
            this.$router.push({ 
                query: { 
                    q: `${this.pesquisar}`, 
                    page: 1
                }
            })
        }
    }
}
</script>

<style>

.form-buscar {
    max-width: 950px;
    position: relative;
    display: block;
    margin: 0 auto;
}

#pesquisa {
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    border: none;
    background-color: #E6E1E5;
    color: #1C1B1F;
    font-size: 16px;
}

.icon-lupa {
    position: absolute;
    right: 16px;
    top: 30%;
    border: none;
    text-indent: -100px;
    width: 18px;
    height: 18px;
    background-image: url(../assets/icon-lupa.png);
    background-repeat: no-repeat;
    background-position: center;
}

</style>