<template>
  <main id="home" class="home">
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
  }
})
</script>

<style lang="scss" scoped>
</style>
