<template>
  <div class="coe container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      E-Learning
    </h1>
    <h6 class="mb-6">
      E-Learning
      โปรเจคนี้ เป็นโปรเจคที่ผมพัฒนาให้กับ บริษัทไทยซัมมิส ฮาร์เนส จำกัด
      ภายใตโครงการ Thailand Digital Young Talent 2019
      โปรเจค E-Learning เป็นระบบที่พัฒนาเพื่อให้ พนักงานเข้ามาเรียนในเนื้อหาที่
      Admin ของระบบ ได้จัดเตรียมไว้ให้ ระบบจะมีแบบฝึกหัดให้ทำ หลังจากที่
      พนักงานได้เรียนบทเรียนนั้นๆเสร็จแล้ว ซึ่ง คะแนนที่พนักงานสอบได้ จะถูก
      นำไปวิเคราะห์ เพื่อบ่งชี้ประสิทธิภาพของตัวพนักงาน ซึ่ง ข้อมูลตรงในส่วนนี้จะ
      มีส่วนในการพิจารณา เลื่อนตำแหน่งงานของพนักงานด้วย
      โปรเจคใช้เทคโนโลยี PHP , Bootstrap , MySQL ในการพัฒนา
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/e-learning/1.png" alt="1">
      <img class="mb-6" src="/projects/e-learning/2.png" alt="2">
      <img class="mb-6" src="/projects/e-learning/3.png" alt="3">
      <img class="mb-6" src="/projects/e-learning/4.png" alt="4">
      <img class="mb-6" src="/projects/e-learning/5.png" alt="5">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  setup(_, {root: ctx}) {
    ctx.$store.dispatch('app/showNavbar')
    return {}
  },
})
</script>

<style>
</style>
