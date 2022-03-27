<template>
  <div class="coe container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      COE ( Council Of Engineers )
    </h1>
    <h6 class="mb-6">
      COE ( Council Of Engineers )
      โปรเจคนี้เป็น เว็บไซด์ของสภาวิศวกร ประเทศไทย โดยโปรเจคนี้จะทำหน้าที่เป็น
      ตัวกลางให้ วิศวกรชาวไทย หรือชาวติางชาติที่อาศัยอยู่ใน ประเทศไทย
      ได้ทำการ สมัครเป็นสมาชิกของภาศีวิศวกร ขอใบอนุญาตประกอบวิชาชีพ หรือ
      ขอใบอนุญาตนิติบุคล ในระดับองค์กรต่างๆ
      โปรเจคจะใช้เทคโนโลยี VueJS Vuex เป็นฝั่ง frontend และ
      NodeJS FeathersJS เป็นฝั่ง backend
    </h6>
    <h6>
      ความท้าทายของโปรเจคนี้คือ การวางระบบ infra ยังไงให้ระบบสามารถจัดการตัวเองได้
      ใน กรณีเครื่องเซิฟเวอร์มีปัญหา และจะต้องรองรับการ scale ของตัวเซิฟเวอร์ได้ด้วย
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/coe/1.png" alt="1">
      <img class="mb-6" src="/projects/coe/2.png" alt="2">
      <img class="mb-6" src="/projects/coe/3.png" alt="3">
      <img class="mb-6" src="/projects/coe/4.png" alt="4">
      <img class="mb-6" src="/projects/coe/5.png" alt="5">
      <img class="mb-6" src="/projects/coe/6.png" alt="6">
      <img class="mb-6" src="/projects/coe/7.png" alt="7">
      <img class="mb-6" src="/projects/coe/8.png" alt="8">
      <img class="mb-6" src="/projects/coe/9.png" alt="9">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
setup(_:any, {root: ctx}:any) {
    ctx.$store.dispatch('app/showNavbar')
    return {}
  },
})
</script>

<style>
</style>
