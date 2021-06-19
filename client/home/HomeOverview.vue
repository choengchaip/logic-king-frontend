<template>
  <div class="home-overview flex flex-col" style="height: 100vh; width: 100vw;">
    <div class="container mx-auto flex items-center justify-end py-5 text-sm font-bold">
      <span>choengchaip@gmail.com</span>
    </div>
    <div class="flex-grow px-16">
      <div id="content" class="content h-full relative overflow-hidden">
        <div class="me-img absolute">
          <img src="/singh_01.png" alt="Choengchai Phachonyut">
        </div>
        <div class="me-role absolute bg-black py-3 px-5">
          <h4 class="capitalize text-4xl text-center text-white font-bold">
            SOFTWARE<br>ENGINEER
          </h4>
        </div>
        <div :key="icon.id" v-for="icon in icons">
          <div :class="icon.className">
            <img :src="icon.src" :alt="icon.src">
          </div>
        </div>
      </div>
    </div>
    <div class="navigator-bar flex justify-center py-5 text-xs font-bold">
      <a class="mx-6" href="#">ABOUT</a>
      <a class="mx-6" href="#">RESUME</a>
      <a class="mx-6" href="#">PROJECTS</a>
      <a class="mx-6" href="#">SKILLS</a>
      <a class="mx-6" href="#">BLOGS</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'
import seed from 'random-seed'

export default Vue.extend({
  data: () => {
    return {
      count: 0,
      healer: null,
      killer: null,
      icons: []
    }
  },
  methods: {
    addIcon: (vm: any) => {
      const id = uuidv4()
      const logos: string[] = [
        '/docker_logo.png',
        '/flutter_logo.png',
        '/golang_logo.png',
        '/jenkins_logo.png',
        '/k8s_logo.png',
        '/kotlin_logo.png',
        '/nuxt_logo.png',
        '/react_logo.png',
        '/swift_logo.png',
        '/ts_logo.png'
      ]
      const logo = logos[vm.count % 10]
      const randX = seed.create().intBetween(1, 30)
      const randY = seed.create().intBetween(1, 30)

      vm.icons = [
        {
          id,
          src: logo,
          className: `me-skill-${randX}-${randY}`
        },
        ...vm.icons
      ]

      vm.count++
    }
  },
  mounted () {
    const vm = this;

    (async () => {
      vm.header = setInterval(() => {
        if (vm.icons.length < 30) {
          vm.addIcon(vm)
        }
      }, 240)
    })()

    setTimeout(() => {
      vm.killer = setInterval(() => {
        vm.icons.pop()
      }, 240)
    }, 7100)
  },
  unmounted () {
    clearInterval(this.killer)
  }
})
</script>

<style lang="scss" scoped>
</style>
