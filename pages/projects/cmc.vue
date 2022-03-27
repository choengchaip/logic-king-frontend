<template>
  <div class="cmc container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      CMC
    </h1>
    <h6 class="mb-6">
      CMC
      โปรเจคนี้เป็น เว็บไซด์ของสำนักงานการบินผลเรือนแห่งประเทศไทย โดยโปรเจคนี้จะทำหน้าที่เป็น
      ตัวกลางให้ สำนักงานการบิน กับ โรงพิมบัตร
      พนักงานจะสามารถเพิ่มข้อมูล นักบินลงในระบบ และสามารถ export ข้อมูลไปยังโรง
      เพื่อทำการพิมบัตร
      โปรเจคจะใช้เทคโนโลยี NuxtJS เป็นฝั่ง frontend และ
      Golang ในส่วนของ Backend
      จะใช้ K8S และ gitlab ในการทำ cicd
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/cmc/1.png" alt="1">
      <img class="mb-6" src="/projects/cmc/2.png" alt="2">
      <img class="mb-6" src="/projects/cmc/3.png" alt="3">
      <img class="mb-6" src="/projects/cmc/4.png" alt="4">
      <img class="mb-6" src="/projects/cmc/5.png" alt="5">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  setup์(_:any, {root: ctx}:any) {
    ctx.$store.dispatch('app/showNavbar')
    return {}
  },
})
</script>

<style>
</style>
