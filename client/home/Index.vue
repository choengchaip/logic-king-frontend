<template>
  <main id="home" class="home">
    <HomeOverview/>
    <HomeResume/>
    <HomeProject/>
    <HomeSkill/>
    <HomeBlog/>
    <!--    <div class="home-resume h-screen w-screen" style="scroll-snap-align: start;">-->
    <!--      <div class="container">-->
    <!--        <div class="flex p-16">-->
    <!--          <div style="flex: 0 0 38%; max-width: 38%; height: 100%;">-->
    <!--            <img style="height: 100%; width: 100%; object-fit:scale-down;"-->
    <!--                 src="/singh_04.png"-->
    <!--                 alt="Choengchai Phachonyut">-->
    <!--          </div>-->
    <!--          <div class="p-16 ml-10" style="flex: 0 0 62%; max-width:62%;">-->
    <!--            <h1 class="text-7xl font-bold mb-5">LOGIC IS KING</h1>-->
    <!--            <p class="bg-black text-white py-1 px-3 text-xl font-semibold max-w-max mb-4">Perfectionistic is an-->
    <!--              abstraction of professional</p>-->
    <!--            <p class="mb-12 text-xl font-semibold">-->
    <!--              The good environment is the environment <br>-->
    <!--              that make you stronger-->
    <!--            </p>-->
    <!--            <button class="outline-none focus:outline-none py-6 px-5 bg-black uppercase text-white text-xl font-semibold">-->
    <!--              download cv-->
    <!--            </button>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
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
