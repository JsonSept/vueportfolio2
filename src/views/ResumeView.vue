<template lang="">
    <div class="containerP">
        <h1>Education</h1><br>
        <div class="inner1">
          <div id="card1" class="animate__animated animate__slideInDown" style="width: 20rem; height:20rem" v-for="info in $store.state.education" :key="info">
          <h4>
          {{ info.year }} <br>
            {{ info.description }} <br>
            {{ info.place }} <br>
          </h4><br>
        </div>
        </div>
        
        <br>
        <h1>Work Experience</h1><br>
        <div class="inner2">

          <div id="card2" class="animate__animated animate__slideInRight" style="width: 20rem; height:20rem" v-for="info in $store.state.workExperience" :key="info">
        <h4>
        {{ info.place }} <br>
        {{ info.year }} <br>
        {{ info.duration }} <br>
        {{ info.description }}
        </h4>
       </div>
        </div>
       

       <h1>Subjects on High School</h1>
       <div id="inner3">
         <div id="card3" class="animate__animated animate__slideInUp" style="width: 12rem; height:5rem" v-for="info in $store.state.subjects" :key="info">
          {{ info.name }}
       </div>
       </div>
       
    </div>
</template>


<script>
export default {
    computed: {
      workExperience(){
        this.$store.dispatch('fetchData')
      },
      education(){
        this.$store.dispatch('fetchData')
      },
      subjects(){
        this.$store.dispatch('fetchData')
      }
   },
    mounted(){
      this.workExperience
    },
    mounted(){
      this.education
    },
    mounted(){
      this.subjects
    },
  
    data(){
        return {
           
        }
    }
}
</script>
<style scoped>
#animate__animated.animate__slideInDown {
  --animate-duration: 2s;
}
#animate__animated.animate__slideInUp {
  --animate-duration: 2s;
}
#animate__animated.animate__slideInRight {
  --animate-duration: 2s;
}
#animate__animated.animate__slideInLeft {
  --animate-duration: 2s;
}
anim
/* This changes all the animations globally */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}
       #card1 ,#card2 ,#card3 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-top: 25px;
    box-shadow: 0 4px 20px 0 #0F1A2D;
    transition: 0.3s;
    margin: 15px;
    
    width: 50%; 
    background: rgb(19,9,182);
background: linear-gradient(343deg, rgb(0, 165, 187) 10%, rgba(12,176,125,1) 49%, rgba(3,140,168,1) 100%);
}


.containerP {
    
    justify-content:space-around;
    
    justify-content: center;
}
#card1:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}
#card2:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}
#card3:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}
#card1 {
padding-bottom: 50px;
}
#card3 {
  display: flex;
   justify-content: center;
}
h1 {
  text-align: center;
}
    #inner1 ,#inner2 ,#inner3 {
      display: flex;
      text-align: center;
      justify-content: center;
    }
    .inner1 {
      margin-left: 30%;
      display: flex;
    }

    .inner2 {
      margin-left: 3%;
      display: flex;
      
    }
    .inner3 {
      padding-bottom: 3rem;
    }

    @media screen and (max-width: 900px) {
      #card1 , #card2 ,#card3 {
/* padding-bottom: 50px; */
font-size: 5px;

}
h4 {
  font-size: 10px;
}
    }
</style>