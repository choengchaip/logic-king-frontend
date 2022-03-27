<template>
  <div class="container mx-auto mb-14 sm:mb-0">
    <div class="flex flex-wrap sm:pt-16 sm:pb-8 sm:mb-16 border-b-0 sm-border-b lg:border-b-0">
      <div class="my-img flex justify-center p-4 sm:p-8 md:p-0">
        <IMG
          src="/singh_04_small.png"
          loadingSrc="/singh_04_small.png"
          alt="Choengchai Phachonyut"
        />
      </div>
      <div class="my-detail sm:text-center lg:text-left p-4 sm:p-8 xl:p-16">
        <h1 class="text-5xl sm:text-7xl font-bold mb-5">
          LOGIC IS KING
        </h1>
        <p class="bg-black text-white py-1 px-3 sm:mx-auto lg:mx-0 text-base sm:text-xl font-semibold max-w-max mb-4">
          {{ $t('piaaop') }}
        </p>
        <p class="mb-8 sm:mb-12 text-base sm:text-xl font-semibold">
          {{ $t('tgeitetmys_1') }}<br>
          {{ $t('tgeitetmys_2') }}
        </p>
        <button
          class="w-full sm:w-max cursor-not-allowed outline-none focus:outline-none py-4 sm:py-6 px-5 bg-black uppercase text-white text-xl font-semibold"
        >
          {{ $t('download_cv') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import IMG from '~/components/IMG.vue'

export default defineComponent({
  components: { IMG }
})
</script>

<style lang="scss" scoped>
</style>
