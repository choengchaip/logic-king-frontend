<template>
  <div class="coe container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      HR System
    </h1>
    <h6 class="mb-6">
      HR System
      เป็นระบบจัดการภายในองค์กรของบริษัทแห่งหนึ่ง ซึ่ง ตัวแอพจะทำหน้าที่
      บันทึกการลาหยุดของพนักงาน และ สรุปวันลาคงเหลือของพนักงานแต่ละคน
      อีกทั้งยังสามารถยื่นเรื่องขอเบิกเงิน ในค่าใช้จ่ายต่างๆได้อีกด้วย
      ตัวแอพพัฒนาด้วย Flutter โดยหลังบ้าน จะใช้เป็น NodeJS Feathers
      เชื่อมต่อกับฐานข้อมูล MSSQL
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/hr-system/1.png" alt="1">
      <img class="mb-6" src="/projects/hr-system/2.png" alt="2">
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
