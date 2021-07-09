<template>
  <div id="overview" class="home-overview flex flex-col">
    <div class="container mx-auto hidden sm:flex items-center justify-end py-5 text-sm font-bold">
      <span>choengchaip@gmail.com</span>
    </div>
    <div class="flex-grow px-0 md:px-16">
      <div id="content" class="content h-full relative overflow-hidden">
        <div class="me-img absolute p-5 md:p-0 flex items-center justify-center">
          <img src="/singh_01.png" alt="Choengchai Phachonyut">
        </div>
        <div class="me-role absolute bg-black py-3 px-5">
          <h4 class="capitalize text-4xl text-center text-white font-bold">
            SOFTWARE<br>ENGINEER
          </h4>
        </div>
        <div v-for="icon in icons" :key="icon.id">
          <div :class="icon.className">
            <img :src="icon.src" :alt="icon.src">
          </div>
        </div>
      </div>
    </div>
    <div class="navigator-bar container mx-auto hidden sm:flex justify-center py-5 text-xs font-bold">
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
import { v4 as uuidv4 } from 'uuid'
import seed from 'random-seed'

export default Vue.extend({
  data: () => {
    return {
      max: 30,
      count: 0,
      cell: null,
      icons: []
    }
  },
  mounted () {
    const vm = this;

    (() => {
      vm.header = setInterval(() => {
        if (vm.icons.length < vm.max) {
          vm.addIcon(vm)
        }
      }, 240)
    })()
  },
  unmounted () {
    clearInterval(this.cell)
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
      const [rx, ry] = [seed.create().intBetween(1, vm.max), seed.create().intBetween(1, vm.max)]

      vm.icons = [
        {
          id,
          src: logo,
          className: `me-skill-${rx}-${ry}`
        },
        ...vm.icons
      ]

      vm.count++
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
