<template>
  <img style="display: none" onload="this.style.display=''" :class="`h-full w-full ${className}`" v-lazy="options" :alt="alt">
</template>

<script lang="ts">

import { computed, defineComponent } from '@vue/composition-api'

interface Props {
  className: string
  src: string
  loadingSrc: string
  alt: string
}

export default defineComponent({
  props: {
    className: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      required: true,
    },
    loadingSrc: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  setup (props: Props) {
    const options = computed(() => ({
      src: props.src,
      error: props.loadingSrc,
      loading: props.loadingSrc
    }))

    return {
      options: options as any,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
