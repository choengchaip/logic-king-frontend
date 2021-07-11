<template>
  <div id="resume" class="resume">
    <ResumeInfo/>
    <ResumeStepTile
      :tile="experienceTile"
    />
    <ResumeStepTile
      :tile="educationTile"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ResumeInfo from '~/clients/homes/resumes/ResumeInfo.vue'
import ResumeStepTile, { IStepTile } from '~/clients/homes/resumes/ResumeStepTile.vue'

export default defineComponent({
  components: {
    ResumeStepTile,
    ResumeInfo,
  },
  setup (_, { root: ctx }) {
    const experienceTile: IStepTile = {
      header: ctx.$t('experience'),
      steps: [
        {
          date_range: '2020 - 2021',
          individual: '3DS Interactive',
          role: 'Full Stack Dev.',
          description: `
              ${ctx.$t('tds_1')}<br>
              ${ctx.$t('tds_2')}<br>
              <br>
              ${ctx.$t('tds_3')}
          `,
        },
        {
          date_range: `2021 - ${ctx.$t('present')}`,
          individual: 'Finema',
          role: `${ctx.$t('software')} ${ctx.$t('engineer')}.`,
          description: `
              ${ctx.$t('fnm_1')}<br>
              ${ctx.$t('fnm_2')}<br>
              <br>
              ${ctx.$t('fnm_3')}
          `,
        }
      ],
    }
    const educationTile: IStepTile = {
      header: ctx.$t('education'),
      steps: [
        {
          date_range: '2010 - 2016',
          individual: ctx.$t('acs'),
          role: ctx.$t('sci_math'),
          description: ctx.$t('mymf'),
        },
        {
          date_range: '2016 - 2019',
          individual: ctx.$t('ku_src'),
          role: ctx.$t('com_sci'),
          description: `
              ${ctx.$t('ku_1')}<br>
              ${ctx.$t('ku_2')}<br>
              <br>
              ${ctx.$t('ku_3')}
          `,
        }
      ],
    }

    return {
      experienceTile,
      educationTile,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
