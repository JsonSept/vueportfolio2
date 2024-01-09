<template>
    

    <div class="card" v-for="info in $store.state.reviews" :key="info">
      {{ info.name}}
      {{ info.surname }}
      <br>
      {{ info.title }}
      <br>
      {{ info.quotes }}
      <br>
      <img :src="info.profile" alt="">
      
    </div>
</template>

<script>

export default {
  components: {

},
computed: {
   reviews(){
     this.$store.dispatch('fetchData')
   }
},
mounted(){
this.reviews
}
    
}
</script>
<style scoped>


        .card {
    /* text-align: center; */
   
    box-shadow: 0 4px 20px 0 #0F1A2D;
    transition: 0.3s;
    margin: 15px;
    height: auto;
    width: 50%;
}

    img {
      text-align: center;
      height: 10vh;
      width: 80px;
      margin-right: 20%;
    }

.card:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    /* zoom: 101%; */
}
</style>