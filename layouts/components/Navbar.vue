<template>
  <div :class="`navbar hidden md:block fixed shadow-md left-0 z-50 w-full bg-white ${show ? 'active' : ''}`">
    <div class="container mx-auto hidden md:flex justify-center py-5 text-xs font-bold">
      <a class="mx-6 select-none" href="#overview">ABOUT</a>
      <a class="mx-6 select-none" href="#resume">RESUME</a>
      <a class="mx-6 select-none" href="#project">PROJECTS</a>
      <a class="mx-6 select-none" href="#skill">SKILLS</a>
      <a class="mx-6 select-none" href="#blog">BLOGS</a>
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
    home.addEventListener('scroll', this.onScroll, { passive: true })
  },
  unmounted () {
    const home = document.getElementById('home')
    home.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const home = document.getElementById('home')
      if (home) {
        this.show = home.scrollTop >= (window.innerHeight - 100)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
