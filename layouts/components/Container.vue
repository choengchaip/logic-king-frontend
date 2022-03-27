<template>
  <div>
    <Navbar/>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/layouts/components/Navbar.vue'

export default Vue.extend({
  components: { Navbar },
  head () {
    return {
      title: this.$t('home_page'),
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'image',
          name: 'image',
          property: 'image',
          content: '/singh_04_small.png'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: '/singh_04_small.png'
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$t('meta_title')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.$t('meta_title')
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta_description')
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.$t('meta_description')
        },
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
