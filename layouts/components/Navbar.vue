<template>
  <div :class="`navbar block fixed shadow-md left-0 z-50 w-full bg-white ${show ? 'active' : ''}`">
    <div class="container mx-auto flex justify-center py-5 text-xs font-bold">
      <a class="mx-6 uppercase select-none" href="#overview">{{ $t('about') }}</a>
      <a class="mx-6 uppercase select-none" href="#resume">{{ $t('resume') }}</a>
      <a class="mx-6 uppercase select-none" href="#project">{{ $t('project') }}</a>
      <a class="mx-6 uppercase select-none" href="#skill">{{ $t('skill') }}</a>
      <a class="mx-6 uppercase select-none" href="#blog">{{ $t('blog') }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      show: false
    }
  },
  mounted () {
    const home = document.getElementById('home')
    if (home) {
      home.addEventListener('scroll', this.onScroll, { passive: true })
    }
  },
  unmounted () {
    const home = document.getElementById('home')
    if (home) {
      home.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll () {
      const home = document.getElementById('home')
      if (home) {
        (this as any).show = home.scrollTop >= (window.innerHeight - 100)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
