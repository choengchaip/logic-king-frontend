<template>
  <div>
    <Navbar/>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/layouts/components/Navbar.vue'

export default Vue.extend({
  components: { Navbar },
  head: () => {
    return {
      title: 'Home - Choengchai Phachonyut'
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
