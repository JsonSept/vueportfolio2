<template lang="">
    <div>
        <pulse-loader :loading="!isLoading" color="aqua" size="30px">loading...</pulse-loader>
    </div>
</template>
<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
    components: {
    PulseLoader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    makeRequest() {
      this.isLoading = true
      .finally(() => {
        this.isLoading = false; 
      });
    },
  },
}
</script>
<style>
    /* Add these styles to your CSS file */
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
}

</style>