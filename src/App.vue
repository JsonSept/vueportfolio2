<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>
  <spinner-comp/>
</template>

<script>
  import NavbarComp from './components/NavbarComp.vue';
  import FooterComp from './components/FooterComp.vue';
  import SpinnerComp from './components/SpinnerComp.vue';

  export default {
    components: {
      NavbarComp,
      FooterComp,
      SpinnerComp,
    }
  }
</script>

<style>
h1,h2,h3,h4:hover {
  color: rgb(254, 255, 255);
}
#app {

  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: Press+Start+2; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
background: linear-gradient(rgba(255, 255, 255, 0.503), rgb(31, 63, 74)), url("https://i.ibb.co/RyT9rTz/newnewbg.jpg");
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
}

nav {
  padding: 30px;
}

nav a {
 
  font-weight: bold;
  color: white;
  align-content: end;
  
}

nav a.router-link-exact-active {
  color: black;
  padding:7px;
  color: aqua;
  border-radius: 7px;
}
</style>
