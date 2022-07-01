<template>
    <section class="container content">
        <h1 class="title">Como podemos simplificar seu código hoje?</h1>

        <GitBuscar />

        <GitProjects />
    </section>
</template>

<script>
import GitBuscar from '@/components/GitBuscar.vue'
import GitProjects from '@/components/GitProjects.vue'
export default {
    components: { 
        GitBuscar, 
        GitProjects 
    }
}
</script>

<style>

.title {
    font-size: 32px;
    color: #E6E1E5;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 60px;
}

</style>