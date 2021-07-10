<template>
  <img :class="className" v-lazy="options" :alt="alt">
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
  computed: {
    options () {
      return {
        src: this.src,
        error: this.loadingSrc,
        loading: this.loadingSrc,
      }
    },
  }
})
</script>

<style lang="scss" scoped>
</style>
