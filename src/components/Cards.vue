<template>
    <router-link :to="{
        name: 'detail',
        params: {nome: repositorio.owner.login, projeto: repositorio.name}}"
        >
        <div class="card">
            <img :src="repositorio.owner.avatar_url" alt="Avatar"/>

            <div class="name-description">
                <Favoritar :repositorio="repositorio" :active="active" :index="index"/>
            </div>

            <span>></span>
        </div>
    </router-link>
</template>

<script>

import Favoritar from './Favoritar.vue'

export default {
    components: { Favoritar },

    props: {
        repositorio: Object,
        active: {
            default: "",
            type: String
        },
        index: Number
    }
}
</script>

<style>

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
    z-index: 2;
    border: 1px solid #938F99;
}

.card span {
    font-size: 28px;
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

</style>