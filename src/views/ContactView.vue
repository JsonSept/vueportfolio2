<template class="bg bg-black">
    <div>
        <h1>{{ title }}</h1>
    </div>
    <div class="cardReviews">
<div class="row">
  <div class="col-lg-6">
    <div class="cont1">
      <div class="formInfo">
    
      <form action="https://formspree.io/f/mvoeonkn"
    method="POST">
          <div class="mb-3">
      <label for="exampleFirstName" class="form-label">Firstname</label>
      <input type="name" class="form-control" id="exampleFirstName">
    </div>
    <div class="mb-3">
      <label for="exampleLastName" class="form-label">Lastname</label>
      <input type="password" class="form-control" id="exampleLastName">
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Message Me</label>
      <textarea name="message" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    
    </div>

  </div>


  <div class="col-lg-6">
    <div class="cont2">
                                <div class="logo1  p-3">
                                  <a href="https://github.com/JsonSept" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black" class="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    </svg></a>
    <p class="p text-black">Github</p>               
                                </div>
                                  <div class="logo1  p-3">
                                    <a href="https://app.netlify.com/teams/jsonsept/overview" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black" class="bi bi-asterisk" viewBox="0 0 16 16">
      <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
    </svg></a>
    <p class="p text-black">Netlify</p>
                                </div>
                                  <div class="logo1  p-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black bg-black" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <a href="https://www.linkedin.com/in/jason-september-431380270/" target="_blank"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></a>
                                  </svg>
                                  <p class="p text-black">Linkedin</p>
                                </div>
                                  <div class="logo1  p-3">
                                    <a href=""></a>
                                  </div>
    </div>

  </div>
</div>

<div class="cont">

</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'This is my Contact page',
           
        }
    }
}
</script>
<style>
.row {
  padding-bottom: 40%;
}
.cardReviews {
  margin-left: 25%;
  margin-top:2%;
  margin-bottom:9%;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: rgb(88, 93, 93);
  color:black;
  width: 50%;
  height: fit-content;
  border-radius: 9px;
  box-shadow: 0 8px 40px 0 white;
}
.bg{
    padding-bottom: 50%;
  }
/* svg:hover {
  transform: scaleX(1);
  color:rgb(254, 255, 255)
}
   
  

.form {
    box-shadow: 0 4px 20px 0 #0592ae;
    /* padding-bottom: 30%; */
/* } */
 
 /*.cont1 {
  background-color: black;
 
 }



 .cont2 {
  
  margin-top: 9%;
  width: 50%;
  display: flex;
  background-color: white;
  opacity: calc(0.7);
  margin-top: 3%;
  box-shadow: 0,0,0,2px #0592ae;
margin-right: 10%;
 }
*/
 @media screen and (max-width: 900px) {
  .cardReviews {
    margin-left: 17%;
    font-size: 8px;
    width: 200px;
    text-align: center;
    height: 310px;
    font-size: 5px;
    margin-top: 30%;

  }
 }
  /*
  .cont {
    font-size: 20px;
    height: 50px;
    padding-bottom: 30%;
    
  }
  .cont1 {
    height: 75%;
    
    
  }
  input {
    height: 20px;
  }
  svg {
    width: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-bottom: 30%;
  }
  .cont2 {
  text-align: center;
  width: 60%;

  }
  form {
   padding-bottom: 40%;
  }
  
 } */
</style>

