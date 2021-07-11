<template>
  <div class="mb-8">
    <div class="container mx-auto flex flex-col pb-8 px-4 sm:px-0">
      <h1 class="uppercase bg-black text-white text-4xl font-bold p-4 sm:p-6 max-w-max mx-0 sm:mx-auto lg:mx-0">
        {{ tile.header }}
      </h1>
    </div>
    <div class="dot-line hidden sm:block relative">
      <div class="line bg-gray-200 absolute w-full"/>
      <div class="container mx-auto flex flex-wrap">
        <div class="dot-item">
          <div class="dot border bg-white"/>
        </div>
        <div class="dot-item">
          <div class="dot border bg-white"/>
        </div>
      </div>
    </div>
    <div
      class="detail-list container mx-auto flex flex-wrap py-0 sm:py-4 px-4 sm:px-0 sm:mb-8 lg:mb-0 border-b-0 sm-border-b lg:border-b-0"
    >
      <ResumeStepTileItem
        v-for="(step, index) in tile.steps"
        :key="index"
        :item="step"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ResumeStepTileItem from '~/clients/homes/resumes/ResumeStepTileItem.vue'

interface IStepTileItem {
  date_range: string
  individual: string
  role: string
  description: string
}

export interface IStepTile {
  header: string
  steps: IStepTileItem[]
}

export default defineComponent({
  components: { ResumeStepTileItem },
  props: {
    tile: {
      type: Object as () => IStepTile,
      required: true,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
