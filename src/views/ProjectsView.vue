<template class="body bg-black">
    <div>
        <div class="containerP">
            <div class="card" v-for="info in $store.state.projects" :key="info">
            {{ info.name }} <br>
            {{ info.description }} <br>
            {{ info.url }} <br>
            <div class="btn">
                <a :href="info.github"><button>
                    Github
                
            </button></a>
            <a :href="info.netlify"><button>
                Netlify
               
            </button></a>
            </div>
        </div>
        </div>
        
        
        
        <!-- <h1>{{ projects }}</h1> -->
    </div>
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
    }
}
</script>
<style scoped>
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
    /* justify-content: center; */
}
button:hover {
    /* transform: scaleX(0.05); */
    /* transform:translateX(1) */
    top: -5px;
}
    .card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    /* margin-left: 25px; */
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


</style>