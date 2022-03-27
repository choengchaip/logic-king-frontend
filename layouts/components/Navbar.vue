<template>
  <no-ssr>
    <div id="navbar" :class="`navbar block fixed shadow-md left-0 z-50 w-full bg-white px-4 ${show ? 'active' : ''}`">
      <div class="container mx-auto flex justify-center py-5 text-xs font-bold">
        <a class="flex-1 sm:flex-none mx-0 sm:mx-6 uppercase select-none text-center" href="/#overview">{{
            $t('about')
          }}</a>
        <a class="flex-1 sm:flex-none mx-0 sm:mx-6 uppercase select-none text-center" href="/#resume">{{
            $t('resume')
          }}</a>
        <a class="flex-1 sm:flex-none mx-0 sm:mx-6 uppercase select-none text-center" href="/#project">{{
            $t('project')
          }}</a>
        <a class="flex-1 sm:flex-none mx-0 sm:mx-6 uppercase select-none text-center" href="/#skill">{{
            $t('skill')
          }}</a>
        <a class="flex-1 sm:flex-none mx-0 sm:mx-6 uppercase select-none text-center" href="/#blog">{{ $t('blog') }}</a>
      </div>
    </div>
  </no-ssr>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from '@vue/composition-api'

export default defineComponent({
  setup์(_:any, {root: ctx}:any) {
    const show = computed<boolean>(() => ctx.$store.getters['app/isShowNavbar'])

    return {
      show,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
