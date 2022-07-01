<template>
    <div>
        <div class="name-favoritar">
            <h1>{{repositorio.name}}</h1>

            <div class="favoritar" @click.prevent="favoritar">
                <img 
                    id="favorito" 
                    src="../assets/coracao.svg" 
                    alt="Coracao"
                />

                <img :class="['preenchido', active]" src="../assets/coracao_favorito.png" alt="Coracao Preenchido">
            </div>
        </div>

        <p class="descricao">{{repositorio.description}}</p>
    </div> 
</template>

<script>
export default {
    
    props: ["repositorio", "active", "index"],

    methods: {
        favoritar() {
            const favorito = document.querySelectorAll(".preenchido")
            const index = this.index
            const jaFavoritado = favorito[index].classList.contains("active")

            if (jaFavoritado) {
                this.$store.dispatch("removeFavorito", this.repositorio.id)
                favorito[index].classList.remove("active")
                return
            }

            this.$store.dispatch("addFavoritos", this.repositorio)
            favorito[index].classList.add("active")
        },
    }
}
</script>

<style>

.name-favoritar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
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

@media (max-width: 700px) {
    .name-favoritar {
        display: block;
    }

    .name-favoritar img {
        margin-left: 0px;
    }

    .name-favoritar h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 20px;
    }

    .favoritar {
        position: absolute;
        display: block;
        text-align: center;
        top: -80px;
        right: 0;
    }

    .descricao {
        text-align: center;
    }
}

</style>