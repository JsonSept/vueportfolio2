<template lang="">
    <div>
        <h1>Education</h1>
        <div class="card" v-for="info in $store.state.education" :key="info">
          <h4>
          {{ info.year }} <br>
            {{ info.description }} <br>
            {{ info.place }} <br>
          </h4>
        </div>
        <h1>Work Experience</h1>
       <div class="card" v-for="info in $store.state.workExperience" :key="info">
        <h4>
        {{ info.place }} <br>
        {{ info.year }} <br>
        {{ info.duration }} <br>
        {{ info.description }}
        </h4>
       </div>

       <h1>Subjects on High School</h1>
       <div class="card" v-for="info in $store.state.subjects" :key="info">
        <h4>
        {{ info.name }}
      </h4>
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
    .card {
      margin-right: 20%;
      text-align: center;
  height: auto;
  width: 80%;
  opacity: 0.9;
  border-radius: 6px;
  box-shadow: 0 8px 40px 0 aqua;
    }
</style>