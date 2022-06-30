<template>
    <ul class="paginacao" v-if="total > 1">
        <li v-for="pagina in paginas" :key="pagina">
            <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        porPagina: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 1
        }
    },

    methods: {
        query(pagina) {
            return {
                ...this.$route.query,
                page: pagina
            }
        }
    },

    computed: {
        paginas() {
            const current = Number(this.$route.query.page)
            const range = 9
            const offset = Math.ceil(range / 2)
            const total = this.paginasTotal
            const pagesArray = []
            for (let i = 1; i <= total; i++) {
                pagesArray.push(i)
            }
            pagesArray.splice(0, current - offset)
            pagesArray.splice(range, total)
            return pagesArray
        },
        paginasTotal() {
            const total = this.total / this.porPagina
            return total !== Infinity ? Math.ceil(total) : 0
        }
    }
}
</script>

<style>

.paginacao {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 60px;
}

.paginacao li a {
    color: #E6E1E5;
    margin: 0 10px;
}

.paginacao li a.router-link-exact-active {
    background-color: #49454F;
    padding: 5px;
    border-radius: 4px;
}
</style>