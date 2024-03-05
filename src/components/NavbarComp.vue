<template lang="">
<nav class="navbar">

<nav class="navbar navbar-light bg-black">
    
    <div class="logodiv">

      <h3 class="logo text-light"> JS Tech</h3>
    </div>
    <div class="navigation">
      <router-link to="/">Home</router-link> |
                      <router-link to="/about">About</router-link> |
                      <router-link to="/resume">Resume</router-link> |
                      <router-link to="/projects">Projects</router-link> |
                      <router-link to="/reviews">Reviews</router-link> |
                      <router-link to="/contact">Contact</router-link> 
    </div>
    <div>
      <a href="https://i.ibb.co/PhdLKf1/Screenshot-2024-01-12-100709.png" target="_blank"><button class="rbtn">Resume</button></a>
    </div>
</nav>


  
</nav>




 
</template>
<script>
export default {
    
}
</script>
<style>

.navbar {
  /* padding-top: 20px; */
  width: 100%;
  display: flex;
  position: static;
  background-position-y: top;
}
.rbtn {
  border: none;
  border-radius: 5px;
  background-color: aqua;
  color: black;
}
.logodiv {
  padding-left: 5%;
}

.navigation {
  padding-right: 30%;
  justify-content: center;
  
  justify-content: space-between;
}
@media screen and (max-width: 900px) {
      .navbar {
        font-size: 7px;
        background-position-y: top;
        /* margin-bottom: %; */
      }
}
    
 .nav2 {
  display: flex;
   justify-content: left; 
   justify-content: flex-start;
}
    nav {
        box-shadow: 0 4px 20px 0 #0F1A2D;
    transition: 0.3s;
    }

    .navbar {
        text-align: center;
    }  

    /* @media screen and (max-width: 900px) {
      .nav2 {
        font-size: 7px;
      }

    } */
</style>