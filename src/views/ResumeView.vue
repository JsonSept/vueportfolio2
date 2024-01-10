<template lang="">
    <div class="containerP">
        <h1>Education</h1><br>
        <div class="inner1">
          <div class="card1" style="width: 20rem; height:20rem" v-for="info in $store.state.education" :key="info">
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
          <div class="card2" style="width: 20rem; height:20rem" v-for="info in $store.state.workExperience" :key="info">
        <h4>
        {{ info.place }} <br>
        {{ info.year }} <br>
        {{ info.duration }} <br>
        {{ info.description }}
        </h4>
       </div>
        </div>
       

       <h1>Subjects on High School</h1>
       <div class="inner3">
        <div class="card3" style="width: 12rem; height:5rem" v-for="info in $store.state.subjects" :key="info">
        <h4>
        {{ info.name }}
      </h4>
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
       .card1 ,.card2 ,.card3 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-top: 25px;
    /* margin-bottom: 25px; */
    box-shadow: 0 4px 20px 0 #0F1A2D;
    transition: 0.3s;
    margin: 15px;
    /* height: 42%;  */
    width: 50%; 
}

.card1 ,.card2 ,.card3 {
  display: grid;
  /* background-color: black;
   */
   background: rgb(19,9,182);
background: linear-gradient(343deg, rgb(0, 165, 187) 10%, rgba(12,176,125,1) 49%, rgba(3,140,168,1) 100%);
}
.containerP {
    
    justify-content:space-around;
    
    justify-content: center;
}
.card1:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}
.card2:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}
.card3:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}
.card1 {
padding-bottom: 50px;
}
.card2 {
  
}
.card3 {
  
}
h1 {
  text-align: center;
}
    .inner1 ,.inner2 ,.inner3 {
      display: flex;
      text-align: center;
    }
    .inner1 {
      margin-left: 30%;
    }

    .inner2 {
      margin-left: 3%;
      
    }
    .inner3 {
      padding-bottom: 3rem;
    }
</style>