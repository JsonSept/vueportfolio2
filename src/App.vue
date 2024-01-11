<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
  import NavbarComp from './components/NavbarComp.vue';
  import FooterComp from './components/FooterComp.vue';
  export default {
    components: {
      NavbarComp,
      FooterComp
    }
  }
</script>

<style>

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: Press+Start+2; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 2)), url("https://i.ibb.co/tH9gT72/mynewbg.jpg");
  background-blend-mode: darken;
}

nav {
  padding: 30px;
}

nav a {
  /* margin-left: 20%; */
  font-weight: bold;
  color: white;
  align-content: end;
  /* justify-content: end; */
}

nav a.router-link-exact-active {
  color: black;
  padding:7px;
  color: aqua;
  border-radius: 7px;
}
</style>
