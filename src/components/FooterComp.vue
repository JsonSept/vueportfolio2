<template >
    <div class="footer fixed-bottom ">
        <h3 class="footer bg-black text-light">&copy;Copyright {{ currentYear }} {{ title }}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentYear: new Date().getFullYear(),
            title: 'JSTech'
        }
    }
}
</script>
<style scoped>
 *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
 }

   
</style>