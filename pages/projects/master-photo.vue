<template>
  <div class="master-photo container mt-16 p-8 sm:p-16">
    <h1 class="text-2xl text-center mb-12">
      Master photo
    </h1>
    <h6 class="mb-6">
      Master photo เป็นร้านค้าที่ รับสกรีนรูปต่างๆ ลงไปในวัตถุที่หลากหลาย
      เช่น สกรีนภาพลงไปในเสื้อ หมอน และ รับทำกรอบรูปในโอกาสต่างๆ เช่น งาน
      แต่งงาน เป็นต้น
      โปรเจคนี้ เป็นเว็บไซด์ที่ทำหน้าที่เป็น หน้าบ้านของ Master photo สามารถรับ
      ออเดอร์ได้ อัพโหลดรูปภาพ และดูข้อมูลต่างๆผ่านเว็บไซด์
      โปรเจคนี้ใช้เทคโนโยลี PHP, Bootstrap, MySQL และเชื่อมต่อ Payment
      gateway เช่น Paypal, 2C2P
    </h6>
    <div class="flex flex-col items-center py-4 sm:py-8">
      <img class="mb-6" src="/projects/master-photo/1.png" alt="1">
      <img class="mb-6" src="/projects/master-photo/2.png" alt="2">
      <img class="mb-6" src="/projects/master-photo/3.png" alt="3">
      <img class="mb-6" src="/projects/master-photo/4.png" alt="4">
      <img class="mb-6" src="/projects/master-photo/5.png" alt="5">
      <img class="mb-6" src="/projects/master-photo/6.png" alt="6">
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
