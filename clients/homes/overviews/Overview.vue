<template>
  <div id="overview" class="overview flex flex-col">
    <div class="container mx-auto flex items-center justify-between py-5 px-3 text-sm font-bold">
      <div class="flags flex">
        <NuxtLink class="mr-2" :to="switchLocalePath('th')">
          <img src="/thai.png" alt="Thai">
        </NuxtLink>
        <NuxtLink :to="switchLocalePath('en')">
          <img src="/usa.png" alt="USA">
        </NuxtLink>
      </div>
      <span>choengchaip@gmail.com</span>
    </div>
    <div class="flex-grow px-0 md:px-16">
      <div id="content" class="content h-full relative overflow-hidden">
        <div class="me-img absolute p-5 md:p-0 flex items-center justify-center">
          <IMG
            src="https://logic-king.sgp1.digitaloceanspaces.com/singh_01.png"
            loadingSrc="/singh_01_small.png"
            alt="Choengchai Phachonyut"
          />
        </div>
        <div class="me-role absolute bg-black py-3 px-5">
          <h4 class="uppercase text-4xl text-center text-white font-bold">
            {{ $t('software') }}<br>{{ $t('engineer') }}
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
      <a class="mx-6 uppercase select-none" href="#overview">{{ $t('about') }}</a>
      <a class="mx-6 uppercase select-none" href="#resume">{{ $t('resume') }}</a>
      <a class="mx-6 uppercase select-none" href="#project">{{ $t('project') }}</a>
      <a class="mx-6 uppercase select-none" href="#skill">{{ $t('skill') }}</a>
      <a class="mx-6 uppercase select-none" href="#blog">{{ $t('blog') }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid'
import seed from 'random-seed'
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import IMG from '~/components/IMG.vue'

interface IIcon {
  id: string
  src: string
  className: string
}

export default defineComponent({
  components: { IMG },
  setup () {
    const max = 30
    let count = 0
    const icons = ref<IIcon[]>([])
    const addIcon = () => {
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
      const logo = logos[count % 10]
      const [rx, ry] = [seed.create().intBetween(1, max), seed.create().intBetween(1, max)]

      icons.value = [
        {
          id,
          src: logo,
          className: `me-skill-${rx}-${ry}`
        },
        ...icons.value
      ]

      count++
    }

    onMounted(() => {
      const s = setInterval(() => {
        if (icons.value.length < max) {
          addIcon()
        } else {
          clearInterval(s)
        }
      }, 240)
    })

    return {
      icons: icons as unknown as () => IIcon[]
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
