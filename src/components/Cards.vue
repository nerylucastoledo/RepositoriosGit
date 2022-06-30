<template>
    <router-link :to="{
        name: 'detail',
        params: {nome: nome, projeto: projeto}}"
        >
        <div class="card">
            <img :src="avatar" alt="Avatar"/>

            <div class="name-description">
                <h2>{{fullName}}</h2>

                <p>{{description}}</p>
            </div>

            <span>></span>
        </div>
    </router-link>
</template>

<script>
export default {
    
    props: ["nome", "projeto", "fullName", "avatar", "description"]

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