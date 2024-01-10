
<template class="body" :style="image">
 


  <div>
    
 <div class="container">
    
  <div class="ball"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
  <div class="ball1"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
    <!-- <div class="div1">
        <button @click="show = !show" class="btn">Toggle</button>
    </div> -->
    <!-- <div class="div2">
        <Transition>
      <h1 v-if="show"> {{ greet }} </h1>
    </Transition>
    <Transition>
      <h1 v-if="show"> {{ name }} </h1>
    </Transition>
    <transition>
         -->
        
  
    <!-- </transition> -->

    <div id="gfg1">
        <div id="geek1"> {{ greet }} </div>
        <div id="geek2"> {{ name }} </div>
    </div>
    <div class="ball3"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
  <div class="ball4"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
  
    </div>
    
  
 </div>
  

</template>

<script>
import { ref, watchEffect } from 'vue'

const show = ref(false)
export default {
  data(){
    return {
        show: false,
      greet: 'Hi',
      name: 'My name is Jason September',
   
    }
  },
  methods: {
    showComponent() {
        console.log(this.show)
      }
  },
  watch: {
      show: function (newVal, oldVal) {
        console.log('show changed from', oldVal, 'to', newVal)
      }
    },
  name: 'HomeView',
  components: {
   
  },


}
</script>

<style scoped>

/* animation */
#gfg1 {
            animation-name: text;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }
 
        #geek1 {
            font-size: 40px;
            text-align: center;
            font-weight: bold;
            color: white;
            padding-bottom: 5px;
           
            
        }
 
        #geek2 {
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            padding-bottom: 59px;
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


/* .div1 , .div2 {
    width: 50%;
    height: auto;
}
.container {
    display: flex;
    justify-content: center;
} */
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

  .ball {
        margin-right: 40px;
        width: 25%;
        height: 25%;
    transition:all 0.5s;
    margin-left: 10%;
    margin-top:10%;
    
}
.ball:hover {
    transform: scale(3.05)

}
/* ------------------------------------------------------- */
.ball1 {
        margin-right: 40px;
        width: 25%;
        height: 25%;
    transition:all 0.5s;
    margin-left: 60%;
}
.ball1:hover {
    transform: scale(3.05);
    
    
}

.ball3 {
        margin-right: 40px;
        width: 25%;
        height: 25%;
    transition:all 0.5s;
    margin-left: 2%;
    margin-top:5%
   
}
.ball3:hover {
    transform: scale(3.05)
    
}
/* ------------------------------------------------------- */
.ball4 {
        margin-right: 40px;
        width: 25%;
        height: 25%;
    transition:all 0.5s;
    margin-left: 60%;
    
}
.ball4:hover {
    transform: scale(3.05)
    
}
/* ------------------------------------------------------- */
.ball5 {
        margin-right: 40px;
        width: 5%;
        height: 5%;
    transition:all 0.5s;
    margin-left: 80%;
    
}
.bal5:hover {
    transform: scale(3.05)
    
}

img {
    width: 20%;
    height:20%;
}

@media screen and (max-width: 300px) {
  img {
    height:1vh;
  };
}
</style>

<!-- convert code to api composition in chatgpt-->