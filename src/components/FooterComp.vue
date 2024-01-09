<template lang="">
    <div>
        <h3 class="footer bg-dark text-light">&copy;Copyright {{ currentYear }} {{ title }}</h3>
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

    h3 {
        position:static;
        text-align: center;
        margin-top: 64.5%;
        width: 100%;
    }
</style>