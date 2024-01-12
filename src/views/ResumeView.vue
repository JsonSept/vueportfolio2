<template lang="">

    <div class="resume">
      <div class="div1">
        <div class="innerDiv1">
          <h2>Education</h2>
          </div>
        <div v-for="info in $store.state.education" :key="info">
          <h3>{{info.place}}</h3>
          <h4>{{info.description}}</h4>
          <h6>{{info.year}}</h6>
        </div>
      </div><br>
      <div class="div2">
        <div class="innerDiv2">
          <hr>
          <h2>Work experience</h2>
          <div v-for="info in $store.state.workExperience" :key="info">
            <h3>{{ info.place }}</h3>
          <h4> {{ info.year }}</h4>
          <h4> {{ info.duration }}</h4>
          <h6>{{ info.description }}</h6><br>
          </div>
        </div>
      </div>
      <hr>
      <div class="div3">
        <div class="innerDiv3">
          <h2>Subjects</h2>
          <h6 v-for="info in $store.state.subjects" :key="info">{{ info.name }}</h6><br>
        </div>
      </div>
      <hr>
      <div class="div4">
        <div class="innerDiv4">
          <h2>Skills</h2>
          <div>
            <!-- <div class="progress"> -->
              <h5>Scratch</h5>
              <h5>HTML</h5>
              <h5>CSS</h5>
              <h5>JavaScript</h5>
              <h5>Vue JS</h5>
  <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <div>
      
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
<style>



    @media screen and (max-width: 900px) {
      #card1 , #card2 ,#card3 {
/* padding-bottom: 50px; */
font-size: 5px;

 }
/* h4 {
  font-size: 10px;
}*/
    }
</style>