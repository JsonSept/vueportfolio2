<template>
  <div class="about">
    <h1>About</h1>

    <div class="card">
    <h3 v-for="info in $store.state.about" :key="info"> 
      {{ info }}
    </h3>
  </div>

  </div>
</template>



<script>



  export default {
   computed: {
      about(){
        this.$store.dispatch('fetchData')
      }
   },
    mounted(){
      this.about
    }
   
  }
</script>

<style scoped>
.card {
  text-align: center;
  height: auto;
  width: 80%;
  opacity: 1;
  border-radius: 6px;
  box-shadow: 0 8px 40px 0 aqua;
  
}
</style>