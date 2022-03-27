<template>
  <div class="car-shop container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      Car Shop
    </h1>
    <h6 class="mb-6">
      Carshop
      แอพ ซื้อขายรถยนต์มือสอง ทำหน้าที่เป็นตัวกลางระหว่าง ผู้ซื้อกับผู้ขาย
      ซึ่ง แอพนี้ทำงานเหมือนแอพ One2Car ทุกประการ แต่ผมได้เพิ่มลูกเล่นในเรื่อง
      ของ ระบบ comment ใต้โพส และ google map เข้าไปด้วย
      โปรเจคนี้ใช้เทคโนโลยี Flutter เป็น frontend และ ใช้ firebase เป็น
      ฐานข้อมูล โดยตัว firebase มีlibrary หลังบ้านให้ใช้โดยที่เราไม่ต้องเขียนเอง
      อีกทั้งแอพนี้ยังใช้ google map , facebook login, google signin, firebase
      function , firebase cloud messaging ในการพัฒนา features ต่างๆอีกด้วย
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/car-shop/1.png" alt="1">
      <img class="mb-6" src="/projects/car-shop/2.png" alt="2">
      <img class="mb-6" src="/projects/car-shop/3.png" alt="3">
      <img class="mb-6" src="/projects/car-shop/4.png" alt="4">
      <img class="mb-6" src="/projects/car-shop/5.png" alt="5">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  setup(_: any, {root: ctx}: any) {
    ctx.$store.dispatch('app/showNavbar')
    return {}
  },
})
</script>

<style>
</style>
