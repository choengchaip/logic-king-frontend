<template>
  <main id="home" class="home" @scroll.passive="onScroll">
    <Overview/>
    <Resume/>
    <Project/>
    <Skill/>
    <Blog/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Overview from '~/clients/homes/overviews/Overview.vue'
import Resume from '~/clients/homes/resumes/Resume.vue'
import Project from '~/clients/homes/projects/Project.vue'
import Skill from '~/clients/homes/skills/Skill.vue'
import Blog from '~/clients/homes/blogs/Blog.vue'

export default defineComponent({
  components: {
    Blog,
    Skill,
    Project,
    Resume,
    Overview,
  },
  setup (_, { root: ctx }) {
    const onScroll = () => {
      const home = document.getElementById('home')
      const navbar = document.getElementById('navbar')
      if (home && navbar) {
        const show: boolean = home.scrollTop >= (window.innerHeight - 100)

        if (show !== ctx.$store.getters['app/isShowNavbar']) {
          if (show) {
            ctx.$store.dispatch('app/showNavbar')
          } else {
            ctx.$store.dispatch('app/hideNavbar')
          }
        }
      }
    }

    return {
      onScroll,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
