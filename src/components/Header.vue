<template>
    <header>
        <nav class="navbar">
            <router-link to="/" id="logo">
                <img src="../assets/logo.png" alt="Logo">
            </router-link>

            <ul>
                <li>
                    <router-link to="/">Pesquisa</router-link>
                </li>
                <li>
                    <router-link to="/favoritos">Favoritos</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style>

header {
    background-color: #49454F;
    border-radius: 0 0 12px 12px;
    border-bottom: 1px solid #938F99;
    padding: 10px 8px;
}

.navbar {
    display: flex;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
}

.navbar ul {
    width: 100%;
}

.navbar ul li {
    display: inline-block;
}

.navbar ul li:first-child {
    margin-right: 60px;
}

.navbar ul li a {
    color: #E6E1E5;
    position: relative;
}

.navbar ul li a.router-link-exact-active::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #E6E1E5;
    margin: 20px 0;
    position: absolute;
}


</style>