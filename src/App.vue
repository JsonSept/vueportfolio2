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
  /* background-color: black; */
  background-image: url("https://i.postimg.cc/K8Wjnnz4/bg2.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
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
