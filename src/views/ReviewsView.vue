<template>
    
<div class="structureR">
    <div class="cardR"  v-for="info in $store.state.reviews" :key="info">
      <div class="divV2">
        {{ info.name}}
      {{ info.surname }}
      <br>
      <br>
      {{ info.title }}
      <br>
      <br>
      {{ info.quotes }}
      <br>
      </div>
      
      <div class="divV1">
        <img class="img" :src="info.profile" alt="">
      </div>
      
    </div>
  </div>

  

</template>

<script>
  import { ref, watchEffect } from 'vue'
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

.structureR {
  display: flex;
  /* justify-content: space-around; */
}
        .cardR {
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
}

@media screen and (max-width: 900px) {
    .structureR {
        font-size: 7px;
        display: inline-block;
        display: grid;
    
}

}
@media screen and (max-width: 900px) {
  .cardR {
    width: 15rem;
    height: fit-content;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  
}

/* animation carousel */
.carousel-home-resources {
  .left-1 {
    transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
  }
  .right-1 {
    transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
  }
}

</style>