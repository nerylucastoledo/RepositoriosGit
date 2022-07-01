<template>
  <div id="app">
    <Header />

    <main id="main">
        <transition mode="out-in">
          <router-view />
        </transition>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
}
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  display: flex;
  min-height: 90vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
  text-decoration: none;
  font-weight: 400;
}

body {
  background-color: #1C1B1F;
}

body, ul, li, h1, h2, h3, p, a {
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
  text-decoration: none;
  font-weight: 400;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

</style>