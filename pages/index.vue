<template>
  <Home />
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '~/client/home/Index.vue'

export default Vue.extend({
  components: {
    Home,
  },
  data: () => {
    return {
      singh: 'SINGH'
    }
  }
})
</script>

<style>
</style>
