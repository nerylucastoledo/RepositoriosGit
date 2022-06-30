<template>
    <div>
        <div class="name-favoritar">
            <h1>{{repositorio.name}}</h1>

            <div class="favoritar" @click="favoritar">
                <img id="favorito" src="../assets/coracao.svg" alt="Coracao"/>

                <img class="preenchido" src="../assets/coracao_favorito.png" alt="Coracao Preenchido">
            </div>
        </div>

        <p>{{repositorio.description}}</p>
    </div> 
</template>

<script>
export default {
    
    props: ["repositorio"],

    methods: {
        favoritar() {
            const favorito = document.querySelector(".preenchido");
            if (favorito.classList.contains("active")) {
                this.$store.dispatch("removeFavorito", this.repositorio.id);
                favorito.classList.remove("active");
                return;
            }
            this.$store.dispatch("addFavoritos", this.repositorio);
            favorito.classList.add("active");
        },
    }
}
</script>

<style>

.name-favoritar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.name-favoritar img {
    margin-left: 32px;
    cursor: pointer;
}

.favoritar {
    position: relative;
}

.preenchido {
    position: absolute;
    left: 0;
    width: 27px;
    height: 27px;
    top: 0;
    display: none;
}

.active {
    display: initial;
}

</style>