<template>
    <section class="container">
        <div class="detail-project">
            <div class="background">
                <img src="../assets/logo2.png" alt="Logo"/>
            </div>
            
            <div class="info-git">
                <img src="../assets/gitexplorer.png" alt="Logo">
                <p>GitRepo_Explorer</p>
            </div>

            <div class="detail" v-if="repositorio">
                <img id="avatar-detail" :src="repositorio.owner.avatar_url" alt="Avatar Githhub">
                
                <Favoritar :repositorio="repositorio" :index="0"/>
            </div>

            <div class="info-repositorio">
                <div>
                    <img src="../assets/estrela.png" alt="Estrela">
                    <h2>{{repositorio.stargazers_count}}</h2>
                </div>

                <div>
                    <img src="../assets/olho.png" alt="Olho">
                    <h2>{{repositorio.watchers}}</h2>
                </div>

                <div>
                    <img src="../assets/calendario.png" alt="Calendario">
                    <h2>{{data(repositorio.updated_at)}}</h2>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>

import Favoritar from '../components/Favoritar.vue'

export default {

    components: {
        Favoritar,
    },

    data() {
        return {
            repositorio: "",
        }
    },

    methods: {
        async buscarRepositorio(nome, repositorio) {
            await fetch(`https://api.github.com/repos/${nome}/${repositorio}`)
            .then(req => req.json())
            .then(res => this.repositorio = res)
        },

        data(data) {
            if (data) {
                var dataFormatada = data
                    .substring(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")

                return dataFormatada
            }
        }
    },

    created() {
        const { nome, projeto } = this.$route.params
        this.buscarRepositorio(nome, projeto)
    },
}
</script>

<style>

.detail-project {
    position: relative;
}

.info-git, 
.info-repositorio, 
.info-repositorio div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.detail {
    display: flex;
    align-items: center;
}

.info-git {
    margin-top: 50px;
    margin-bottom: 80px;
}

.info-git img {
    width: 24px;
    height: 24px;
    margin-right: 15px;
    background-color: #fff;
    padding: 2px;
    border-radius: 50%;

}

.detail, .info-repositorio h2 {
    color: #E6E1E5;
}

.info-git p {
    font-weight: 100;
}

.detail {
    max-width: 950px;
    margin-bottom: 60px;
}

.detail h1 {
    font-size: 36px;
    font-weight: 500;
}

.detail img {
    max-width: 160px;
    max-height: 162px;
    margin-right: 30px;
    border-radius: 12px;
}

.info-repositorio {
    max-width: 950px;
}

.info-repositorio, .info-repositorio div {
    justify-content: space-between;
}

.info-repositorio div {
    margin: 0;
}

.info-repositorio img {
    margin-right: 20px;
}

.background {
    position: absolute;
    top: 70%;
    right: 0;
    transform: translate(-10%, -50%);
    filter: brightness(20%);
}

@media (max-width: 700px) {
    .detail {
        display: block;
        margin-bottom: 30px;
    }

    #avatar-detail {
        max-width: 100px;
        max-height: 102px;
        margin-right: 3px;
        display: block;
        margin: 0 auto 30px;
    }

    .info-repositorio {
        display: block;
    }

    .info-repositorio div {
        justify-content: center;
        margin-bottom: 30px;
    }
}

</style>