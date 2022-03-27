<template>
  <div id="project" class="project mb-10">
    <div class="container mx-auto py-16 px-4">
      <h1 class="uppercase bg-black text-white text-4xl font-bold p-4 sm:p-6 max-w-max mx-0 sm:mx-auto lg:mx-0 mb-10">
        {{ $t('project') }}
      </h1>
      <div class="flex flex-wrap" style="margin: 0 -1rem;">
        <NuxtLink to="/projects/coe" class="tmp-project-item flex flex-wrap">
          <div class="tmp-box mega">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 object-cover"
                src="/coe.png"
                alt="COE"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-4xl text-black">
                  COE ( Council Of Engineers )
                </h6>
                <p class="py-1 px-3 bg-green-600 text-white font-light max-w-max rounded">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
        <div class="tmp-project-item flex flex-wrap">
          <NuxtLink to="/projects/car-shop" class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-cover"
                src="/car-shop.png"
                alt="Car Shop"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  Car Shop
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/projects/master-photo" class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-contain"
                src="/master-photo.png"
                alt="Photo"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  Master Photo
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/projects/e-learning" class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-contain"
                src="/thaisummit.png"
                alt="Thai summit"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  E-Learning
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/projects/sale-track" class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-contain"
                src="/sale-track.png"
                alt="Sale Track"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  Sale Track
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-wrap" style="margin: 0 -1rem;">
        <div class="tmp-project-item flex flex-wrap">
          <NuxtLink to="/projects/hr-system" class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-contain"
                src="/hr.png"
                alt="HR"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  HR System
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </NuxtLink>
          <div class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0"
                src="/ai_farm_background_small.png"
                alt="AI Corn Farm"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-white">
                  AI Corn Farm
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded mb-3">
                  {{ $t('done') }}
                </p>
                <p class="text-base sm:text-xs py-1 px-3 bg-yellow-600 text-white font-light max-w-max rounded">
                  {{ $t('project_uploading') }}
                </p>
              </div>
            </div>
          </div>
          <NuxtLink to="/projects/cmc" class="tmp-box">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-contain"
                src="/cmc.png"
                alt="CMC"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  CMC
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-green-600 text-white font-light max-w-max rounded mb-3">
                  {{ $t('done') }}
                </p>
              </div>
            </div>
          </NuxtLink>
          <div class="tmp-box">
            <div class="border relative w-full pt-full cursor-pointer">
              <div class="flex justify-center items-center absolute top-0 left-0 h-full w-full">
                <div class="mr-2 animate-ping rounded-full bg-gray-400 opacity-75" style="width: 5px; height: 5px;"
                ></div>
                <span class="text-xs text-gray-500 font-thin">
                {{ $t('project_uploading') }}
              </span>
              </div>
            </div>
          </div>
        </div>
        <div class="tmp-project-item flex flex-wrap">
          <div class="tmp-box mega">
            <div class="border relative w-full pt-full overflow-hidden cursor-pointer">
              <IMG
                className="transition duration-800 transform hover:scale-110 absolute top-0 left-0 p-10 object-none"
                src="/care-beau.png"
                alt="Care Beautiful"
              />
              <div class="p-5 absolute top-0 left-0 h-full w-full flex flex-col pointer-events-none">
                <h6 class="mb-2 text-lg text-black">
                  Care Beautiful
                </h6>
                <p class="text-base sm:text-xs py-1 px-3 bg-red-400 text-white font-light max-w-max rounded">
                  {{ $t('progressing') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap" style="margin: 0 -1rem;">
        <div class="project-item">
          <div class="border relative w-full pt-full cursor-pointer">
            <div class="flex justify-center items-center absolute top-0 left-0 h-full w-full">
              <div class="mr-2 animate-ping rounded-full bg-gray-400 opacity-75" style="width: 5px; height: 5px;"></div>
              <span class="text-xs text-gray-500 font-thin">
                {{ $t('project_uploading') }}
              </span>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="border relative w-full pt-full cursor-pointer">
            <div class="flex justify-center items-center absolute top-0 left-0 h-full w-full">
              <div class="mr-2 animate-ping rounded-full bg-gray-400 opacity-75" style="width: 5px; height: 5px;"></div>
              <span class="text-xs text-gray-500 font-thin">
                {{ $t('project_uploading') }}
              </span>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="border relative w-full pt-full cursor-pointer">
            <div class="flex justify-center items-center absolute top-0 left-0 h-full w-full">
              <div class="mr-2 animate-ping rounded-full bg-gray-400 opacity-75" style="width: 5px; height: 5px;"></div>
              <span class="text-xs text-gray-500 font-thin">
                {{ $t('project_uploading') }}
              </span>
            </div>
          </div>
        </div>
        <div class="project-item">
          <div class="border relative w-full pt-full cursor-pointer">
            <div class="flex justify-center items-center absolute top-0 left-0 h-full w-full">
              <div class="mr-2 animate-ping rounded-full bg-gray-400 opacity-75" style="width: 5px; height: 5px;"></div>
              <span class="text-xs text-gray-500 font-thin">
                {{ $t('project_uploading') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import IMG from '~/components/IMG.vue'

export default defineComponent({
  components: { IMG }
})
</script>

<style lang="scss" scoped>
</style>
