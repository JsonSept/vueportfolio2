
<template class="body" :style="image">
 


  <div>
    
 <div class="container">
    
  
    
<div class="conti">
  <div>
    <img id="bg" class="animate__animated animate__fadeIn" src="https://i.ibb.co/qRMRtTn/IMG-16413531471213505-removebg-preview.png" alt="">
  </div>
      <div id="gfg1">
        <div id="greet" class="typing-demo"><span>Hi I'm </span><span class="name name-primary">{{ name }}</span></div>
        <router-link to="/about"><button id="btn" class="animate__animated animate__fadeInRight" to="/src/views/AboutView.vue">About Me</button></router-link>
      </div>
    </div>
  </div>
    

    </div>
    
  
 <!-- </div> -->
  


</template>

<script>
import { ref, watchEffect } from 'vue'

const show = ref(false)
export default {
  data(){
    return {
        show: false,
      greet: 'Hi',
      name: 'Jason September',
      text: 'And I am an',
      title: 'Aspiring Developer'
    
   
    }
  },
  methods: {
    showComponent() {
        console.log(this.show)
      }
  },
  
  name: 'HomeView',
  components: {
   
  },


}
</script>

<style scoped>
button {
 border-radius: 15px;
 background-color: aqua;
 border: none;
 padding: 4px;
}
.typing-demo {
  width: 510px;
  animation: typing 4s steps(30), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;

}
@keyframes typing {
  from {
    width: 0
  }
}

#gfg1 {
  margin-left: 18%;
  margin-top: 12%;
}
.conti {
  display: flex;
  padding-bottom: 2%;
  padding-top: 1%;
}
#bg {
  height: 98%;
  width: 100%;
  border: 5px solid black;
  border-radius: 20px;
}
/* home animation */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 2s;
}
.animate__animated.animate__fadeInRight{
  --animate-duration: 15s;
}
/* This changes all the animations globally */
:root {
  /* --animate-duration: 800ms; */
  --animate-duration: 4s;
  --animate-delay: 0.9s;
}



        @keyframes text {
            from {
                margin-top: 400px;
            }
 
            to {
                margin-top: 0px;
            }
        }

/* --------- */
img {
  padding-bottom: 7%;
}


.btn {
    border-radius: 7px;
    height: 90px;
    width: 120px;
    border:none;
    background-color: white;
    opacity: 0.5;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

img {
    width: 20%;
    height:20%;
}

@media screen and (max-width: 900px) {
  .body {
    
  }
  span {
    font-size: x-small;
  };
  #btn {
    font-size: 4px;
    height:20px;
  }
  
  #bg {
    height:50%;
    width:50%;
  }
  
}
@media screen and (max-width: 900px) {
  img {
    width: 10%;
    height:10%;
}
button {
font-size: 7px;
}
.container {
  display: inline-block;
  justify-content: center;
  height:90vh;
  padding-bottom: none;
  margin-left: none;
}
.gfg1 {
display: block;
justify-content: center;
}
}
</style>
