<template>
  <div class="home">
    <HomeOverview/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeOverview from "~/client/home/HomeOverview.vue";

export default Vue.extend({
  components: {HomeOverview}
})
</script>

<style lang="scss" scoped>
</style>
