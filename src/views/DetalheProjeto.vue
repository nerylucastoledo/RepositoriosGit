<template>
    <section class="container">
        <div class="background">
            <img src="../assets/logo2.png" alt="Logo"/>
        </div>
        <div class="info-git">
            <img src="../assets/logo.png" alt="Logo">
            <p>{{repositorio.full_name}}</p>
        </div>

        <div class="detail" v-if="repositorio">
            <img :src="repositorio.owner.avatar_url" alt="Avatar Githhub">

            <div>
                <h1>{{repositorio.name}}</h1>

                <p>{{repositorio.description}}</p>
            </div> 
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
    </section>
</template>

<script>
export default {
    
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
            if ( data ) {
                var parte = data.substring(0, 10).split('-').reverse().join('/')
                return parte
            }
        }
    },

    created() {
        const { nome, projeto } = this.$route.params
        this.buscarRepositorio(nome, projeto)
    }
}
</script>

<style>

.info-git, 
.detail, 
.info-repositorio, 
.info-repositorio div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.info-git {
    margin-top: 50px;
    margin-bottom: 80px;
}

.info-git img {
    width: 21px;
    height: 21px;
    margin-right: 15px;
}

.info-git p, .detail, .info-repositorio h2 {
    color: #E6E1E5;
}

.info-git p {
    line-height: 24px;
    font-weight: 100;
}

.detail {
    max-width: 950px;
    margin-bottom: 60px;
}

.detail h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
}

.detail p {
    line-height: 20px;
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
    margin: 0 10px;
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

</style>