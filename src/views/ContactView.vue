<template class="bg bg-black">
    <div>
        <h1>{{ title }}</h1>
    </div>

<div class="cont">
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
</template>

<script>
export default {
    data() {
        return {
            title:'This is my Contact page',
            showModal:false,
        }
    }
}
</script>
<style>
    form {
       
        text-align: center;
        
        width: 39%;
       
        margin-bottom:10px;
        padding: 20px;
        opacity: 2s ease;
        
        
    }
  

.form {
    box-shadow: 0 4px 20px 0 #0592ae;
    transition: 0.3s;
    width:80%;
    margin:80px;
}


 
 .cont {
   text-align: center;
    /* justify-content: space-around; */
 }
</style>

