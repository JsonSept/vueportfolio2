<template>
  <h1>About Jason</h1> 
  <div class="about">
    <div class="div1">
      
      <img class="portimage" v-if="!show" src="	https://cdn-thumbs.imagevenue.com/ec/c6/8e/ME17GC0W_b.jpg" alt="">
    </div>

    <div class="div2">
      <div class="card">
    <h5 v-for="info in $store.state.about" :key="info"> 
      {{ info }}
    </h5>
  </div>
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
h1 {
  padding-top: 20px;
  text-align: center;
}
.portimage {
    height: 41vh;
    width:50%;
    border-radius: 100%;
}
.div1 , .div2 {
  margin-top: 10%;
  width:50%;
  padding-bottom: 40%;
} 
h5 {
  font-size: 13px;
}
.about {
  display: flex;
 
}
.card {
  text-align: center;
  height: auto;
  width: 82%;
  opacity: 1;
  border-radius: 6px;
  box-shadow: 0 8px 40px 0 aqua;
  
}
@media screen and (max-width: 900px) {
  .div ,.div2 {
    justify-content: center;
    width:50%;
    
  }
  .about {
    display:grid;
    text-align: center;
  }
  h1 {
  text-align: center;
}
.portimage {
  height: 30%px;
  width: 90%;
}
.div1 {
  margin-left: 25%;
  
}
.div2 {
  margin-left:10%;
  width:100%;
  
}
}
</style>