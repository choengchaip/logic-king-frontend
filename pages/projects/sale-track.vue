<template>
  <div class="car-shop container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      HR System
    </h1>
    <h6 class="mb-6">
      Sales Tracking
      เป็นโปรเจคติดตามสถานะ การขายของพนักงาน โดยพนักงานจะต้องมาอัพเดท
      สถานะของงานทุกครั้งที่มีการเปลี่ยนแปลง หลังจากนั้นทาง บริษัทจะเอาข้อมูล
      ที่พนักงานอัพเดท มาทำเป็น Report
      ตัวแอพพัฒนาด้วย Flutter โดยหลังบ้าน จะใช้เป็น NodeJS Feathers
      เชื่อมต่อกับฐานข้อมูล MySQL
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/sale-track/1.png" alt="1">
      <img class="mb-6" src="/projects/sale-track/2.png" alt="2">
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
