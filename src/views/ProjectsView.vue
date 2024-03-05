<template class="body">
    
<h1>My projects</h1>
 
     <div class="top">
        <div class="containerP">
            <div class="card text-light" style="width: 20rem; height:20rem" v-for="info in $store.state.projects" :key="info">
              <img :src="info.url" alt="">
            {{ info.name }} <br>
            {{ info.description }} <br>
            
            <div class="btn">
                <a :href="info.github" target="_blank"><button>
                    Github
                
            </button></a>
            <a :href="info.netlify" target="_blank"><button>
                Netlify
               
            </button></a>
            </div>
        </div>
        </div>
      </div>

        
         <!-- <h1>{{ projects }}</h1> -->
    
</template>
<script>
export default {
    components: {

},
    computed: {
   projects(){
     this.$store.dispatch('fetchData')
   }
},
mounted(){
this.projects
},
    
    data(){
        return {
            
        }
    },

errorCaptured(err, vm, info) {
    
    console.error(err, vm, info);
    alert("Something went wrong. Please try again later.");
    return false; 
  },
}
</script>
<style scoped>
/* ------------------------ */
.container{
  display:flex;
  align-items:center;
  min-height:100vh;
}

.card{
  overflow: hidden;
  background-color: rgb(4, 4, 5);
  &:hover{
    .card-img{
      mix-blend-mode: overlay;
    }
    .card-img-overlay{
      transform: translateY(0);
      transition: transform .25s ease-out;
      background-color: rgba(0,0,0,.1);
    }
    .card-text{
      opacity: 1;
      transform: translateX(0);
      transition: opacity .5s ease-out, transform .2s ease-out;
    }
    .btn{
      opacity:1;
      transform: translateX(0);
      transition: opacity .7s ease-out, transform .35s ease-out;
    }
  }
}


/* ------------------------ */



.btn {
    display:flex;
    justify-content: space-around;
    padding:20px;

}
button {
    display: flex;
    border-radius: 7px;
    position: relative;
  transition: top 0.3s ease-in-out;
   
}
button:hover {
    transform: scaleX(0.05);
   
    top: -5px;
}
    .card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 20px 0 #0F1A2D;
    transition: 0.3s;
    margin: 15px;
    height: 42%; 
    width: 50%; 
}
.containerP {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    justify-content: center;
}
.card:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
    zoom: 101%;
}

@media screen and (max-width: 300px) {
  .top {
    margin-left: 10%;
  }
    .card {
        font-size: 13px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-left: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 20px 0 #0F1A2D;
    transition: 0.3s;
    margin: 15px;
    height: 42%; 
    width: 60%; 
}
.containerP {
  width: 230px;
  padding-left: 10%;

}
img {
  width: 50%;
  margin-left: 25%;
}
}

</style>