<template>
  <div class=" hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
    <el-carousel
      height="250px"
      :autoplay="false"
      trigger="click"
    >
      <el-carousel-item v-for="item in photos.slice(0,8)" :key="item.pictureUrl">
        <img class="object-cover w-full h-full shrink-0" :src="item.pictureUrl" :alt="item.caption">
      </el-carousel-item>
    </el-carousel>

    <div class="p-3">
      <div class="flex mt-1">
        <p class="font-bold text-sm">{{ address }}</p>
        <div class="flex items-center ml-auto space-x-1">
          <IconStar /><p class="text-sm">{{ stars }}</p>
        </div>
      </div>

      <p class="mt-1 font-medium text-xs">{{ price }}<span class=" font-normal">night</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  photos: IGridItemPhoto[]
  address: string
  stars: number
  price: string
}>()

</script>
