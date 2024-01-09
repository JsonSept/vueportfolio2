<template class="body" :style="image">
  
  <div>
  <div class="ball"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
  <div class="ball1"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
 <div>
  <h1> {{ greet }} </h1>
  <h1> {{ name }} </h1>
 </div>
  <div class="ball3"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
  <div class="ball4"><img src="https://i.postimg.cc/gcvFMq3R/pngwing-com.png" alt="" srcset=""></div>
</div>
  
</template>

<script>


export default {
  data(){
    return {
      greet: 'HI',
      name: 'My name is Jason September',
      image: {background: "url(<>)"}
    }
  },
  name: 'HomeView',
  components: {
   
  }

}
</script>

<style scoped>
template {
    background-image: url("https://drive.google.com/file/d/1wA70jm4cBZ6eHsghI2oKrIREULfHseim/view?usp=drive_link");
}
  .body {
    background-color: black;
    background-image: url(https://drive.google.com/file/d/1wA70jm4cBZ6eHsghI2oKrIREULfHseim/view?usp=drive_link);
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
    transform:scale3d(3.05);
}
.ball1:hover {
    transform: scale(3.05);
    
    
}
/* ------------------------------------------------------- */
/* .ball2 {
        margin-right: 40px;
        width: 25%;
        height: 25%;
    transition:all 0.5s;
    margin-left: 20%;
    margin-top:30%;
}
.ball2:hover {
    transform: scale(3.05)
    
} */
/* ------------------------------------------------------- */
.ball3 {
        margin-right: 40px;
        width: 25%;
        height: 25%;
    transition:all 0.5s;
    margin-left: 2%;
    margin-top:20%
   
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
</style>