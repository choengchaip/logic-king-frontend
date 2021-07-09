<template>
  <div :class="`bg-contain bg-no-repeat bg-center ${className}`" v-lazy:background-image="options">
    <img class="invisible" :src="options.loading" :alt="alt">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    className: {
      type: String,
      default: ''
    },
    src: {
      required: true,
      type: String
    },
    loadingSrc: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      options: {
        src: this.src,
        error: this.loadingSrc,
        loading: this.loadingSrc,
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
