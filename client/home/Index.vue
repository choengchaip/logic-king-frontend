<template>
  <main id="home" class="home" @scroll.passive="onScroll">
    <HomeOverview/>
    <HomeResume/>
    <HomeProject/>
    <HomeSkill/>
    <HomeBlog/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeOverview from '~/client/home/HomeOverview.vue'
import HomeResume from '~/client/home/HomeResume.vue'
import HomeProject from '~/client/home/HomeProject.vue'
import HomeSkill from '~/client/home/HomeSkill.vue'
import HomeBlog from '~/client/home/HomeBlog.vue'

export default Vue.extend({
  components: {
    HomeBlog,
    HomeSkill,
    HomeProject,
    HomeResume,
    HomeOverview
  },
  methods: {
    onScroll () {
      const home = document.getElementById('home')
      const navbar = document.getElementById('navbar')
      if (home && navbar) {
        const show: boolean = home.scrollTop >= (window.innerHeight - 100)

        if (show !== (this as any).$store.getters['app/isShowNavbar']) {
          if (show) {
            (this as any).$store.dispatch('app/showNavbar')
          } else {
            (this as any).$store.dispatch('app/hideNavbar')
          }
        }
      }
    },
  }
})
</script>

<style lang="scss" scoped>
</style>
