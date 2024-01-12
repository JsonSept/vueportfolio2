<template>
    <h1>My Testimonials</h1>
<!-- <div class="card"> -->
  <div class="construct">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div id="test" class="carousel-item" v-for="info,index in $store.state.reviews" :key="info" :class="{active: index==0}">
  <div class="cardReviews">
    <img class="img" :src="info.profile" alt="">
    <h3>{{ info.name}}
      {{ info.surname }}</h3><br>
      <h4>{{ info.title }}</h4><br>
      <div class="divi">
        <p>{{ info.quotes }}</p>
      </div>
    </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
.divi {
  width: 20rem;
  margin-left: 29%;
  padding-bottom: 2%;
}
.cardReviews {
  margin-left: 25%;
  margin-top:2%;
  margin-bottom:9%;
  text-align: center;
  background-color: azure;
  color:black;
  width: 50%;
  height: fit-content;
  border-radius: 9px;
  box-shadow: 0 8px 40px 0 white;
}
#test {
  text-align: center;
  padding-bottom: 2%;
  
}
.structureR {
  display: flex;
}
   

    img {
      text-align: center;
      height: 30vh;
      width: 150px;
      margin-right: 4%;
      margin-top: 2%;
    }

.card:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
}

@media screen and (max-width: 900px) {
    .structureR {
        /* font-size: 2px; */
        display: inline-block;
        display: grid;
        padding-bottom: 30%;
    
}

}
@media screen and (max-width: 900px) {
  .construct {
    padding-bottom: 48%;
  }
  h3 , h4 {
    font-size: 10px;

  }
  .cardReviews {
    margin-left: 17%;
    font-size: 8px;
    width: 200px;
    text-align: center;
    height: 150px;
    width: 200px;
    font-size: 5px;
    margin-top: 30%;
  }
  img {
    height:20px;
    width: 20px;
  }
  p{
    margin-right: 70%;
  }
  .cardR {
    
    width: 15rem;
    height: fit-content;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
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