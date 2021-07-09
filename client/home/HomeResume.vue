<template>
  <div id="resume" class="home-resume">
    <div class="container mx-auto mb-14 sm:mb-0">
      <div class="flex flex-wrap sm:pt-16 sm:pb-8 sm:mb-16 border-b-0 sm-border-b lg:border-b-0">
        <div class="my-img flex justify-center p-4 sm:p-8 md:p-0">
          <img src="/singh_04.png" alt="Choengchai Phachonyut">
        </div>
        <div class="my-detail sm:text-center lg:text-left p-4 sm:p-8 xl:p-16">
          <h1 class="text-5xl sm:text-7xl font-bold mb-5">
            LOGIC IS KING
          </h1>
          <p class="bg-black text-white py-1 px-3 sm:mx-auto lg:mx-0 text-base sm:text-xl font-semibold max-w-max mb-4">
            Perfectionistic is an abstraction of professional
          </p>
          <p class="mb-8 sm:mb-12 text-base sm:text-xl font-semibold">
            The good environment is the environment <br>
            that make you stronger
          </p>
          <button
            class="w-full sm:w-max cursor-not-allowed outline-none focus:outline-none py-4 sm:py-6 px-5 bg-black uppercase text-white text-xl font-semibold"
          >
            download cv
          </button>
        </div>
      </div>
    </div>
    <div class="mb-8">
      <div class="container mx-auto flex flex-col pb-8 px-4 sm:px-0">
        <h1 class="bg-black text-white text-4xl font-bold p-4 sm:p-6 max-w-min mx-0 sm:mx-auto lg:mx-0">
          EXPERIENCE
        </h1>
      </div>
      <div class="dot-line hidden sm:block relative">
        <div class="line bg-gray-200 absolute w-full"/>
        <div class="container mx-auto flex flex-wrap">
          <div class="dot-item">
            <div class="dot border bg-white"/>
          </div>
          <div class="dot-item">
            <div class="dot border bg-white"/>
          </div>
        </div>
      </div>
      <div
        class="detail-list container mx-auto flex flex-wrap py-0 sm:py-4 px-4 sm:px-0 sm:mb-8 lg:mb-0 border-b-0 sm-border-b lg:border-b-0"
      >
        <div class="detail-item pr-12 mb-14 sm:mb-0 flex">
          <div class="prefix flex sm:hidden flex-col py-6">
            <div class="dot border bg-white"/>
            <div class="line bg-gray-200 flex-grow mt-4"/>
          </div>
          <div class="detail">
            <h6 class="text-2xl">
              2020 - 2021
            </h6>
            <h6 class="text-2xl font-light">
              3DS Interactive
            </h6>
            <h5 class="text-4xl font-bold my-3">
              Full Stack Dev.
            </h5>
            <p class="text-base font-light">
              We make your e-commerce glowing !!<br>
              We make an automated marketing !!<br>
              <br>
              Every actions of your client will send to you to let you
              know your target behavior and let you make the campaign
              or promotion that answer your client needed.
            </p>
          </div>
        </div>
        <div class="detail-item pr-12 mb-14 sm:mb-0 flex">
          <div class="prefix flex sm:hidden flex-col py-6">
            <div class="dot border bg-white"/>
            <div class="line bg-gray-200 flex-grow mt-4"/>
          </div>
          <div class="detail">
            <h6 class="text-2xl">
              2021 - PRESENT
            </h6>
            <h6 class="text-2xl font-light">
              Finema
            </h6>
            <h5 class="text-4xl font-bold my-3">
              Software Engineer.
            </h5>
            <p class="text-base font-light">
              We working on decentralized identity platform<br>
              to bring greater trust and lower transaction.<br>
              <br>
              We use blockchain technology to make our client
              data be privacy and we implement our core product
              to client core system to make it more
              immutable, verifiable, stable with lower cost
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-8">
      <div class="container mx-auto flex flex-col pb-8 px-4 sm:px-0">
        <h1 class="bg-black text-white text-4xl font-bold p-4 sm:p-6 max-w-min mx-0 sm:mx-auto lg:mx-0">
          EDUCATION
        </h1>
      </div>
      <div class="dot-line hidden sm:block relative">
        <div class="line bg-gray-200 absolute w-full"/>
        <div class="container mx-auto flex flex-wrap">
          <div class="dot-item">
            <div class="dot border bg-white"/>
          </div>
          <div class="dot-item">
            <div class="dot border bg-white"/>
          </div>
        </div>
      </div>
      <div
        class="detail-list container mx-auto flex flex-wrap py-0 sm:py-4 px-4 sm:px-0 sm:mb-8 lg:mb-0 border-b-0 sm-border-b lg:border-b-0"
      >
        <div class="detail-item pr-12 mb-14 sm:mb-0 flex">
          <div class="prefix flex sm:hidden flex-col py-6">
            <div class="dot border bg-white"/>
            <div class="line bg-gray-200 flex-grow mt-4"/>
          </div>
          <div class="detail">
            <h6 class="text-2xl">
              2010 - 2016
            </h6>
            <h6 class="text-2xl font-light">
              Assumption Sriracha
            </h6>
            <h5 class="text-4xl font-bold my-3">
              SCI-MATH.
            </h5>
            <p class="text-base font-light">
              Miss you my friend.
            </p>
          </div>
        </div>
        <div class="detail-item pr-12 mb-14 sm:mb-0 flex">
          <div class="prefix flex sm:hidden flex-col py-6">
            <div class="dot border bg-white"/>
            <div class="line bg-gray-200 flex-grow mt-4"/>
          </div>
          <div class="detail">
            <h6 class="text-2xl">
              2016 - 2019
            </h6>
            <h6 class="text-2xl font-light">
              Kasetsart University SRC.
            </h6>
            <h5 class="text-4xl font-bold my-3">
              Computer Sci.
            </h5>
            <p class="text-base font-light">
              I’ve learned many thing from here.<br>
              I’m very happy to have been there.<br>
              <br>
              Thank you Kasetsart sriracha :)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
</style>
