<template>
  <Container>
    <div class="american">
      <Nuxt/>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '~/layouts/components/Container.vue'

export default Vue.extend({
  components: { Container },
})
</script>

<style lang="scss">
</style>
