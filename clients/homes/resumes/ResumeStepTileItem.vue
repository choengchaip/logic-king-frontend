<template>
  <div class="detail-item pr-12 mb-14 sm:mb-0 flex">
    <div class="prefix flex sm:hidden flex-col py-6">
      <div class="dot border bg-white"/>
      <div class="line bg-gray-200 flex-grow mt-4"/>
    </div>
    <div class="detail">
      <h6 class="text-2xl">
        {{ item.date_range }}
      </h6>
      <h6 class="text-2xl font-light">
        {{ item.individual }}
      </h6>
      <h5 class="text-4xl font-bold my-3">
        {{ item.role }}
      </h5>
      <p class="text-base font-light" v-html="item.description"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export interface IStepTileItem {
  date_range: string
  individual: string
  role: string
  description: string
}

export default defineComponent({
  props: {
    item: {
      type: Object as () => IStepTileItem,
      required: true,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
