<template>
  <div class=" pb-10 border-b border-b-gray">
    <el-carousel
      height="450px"
      :autoplay="false"
      trigger="click"
      :interval="4000" arrow="always"
      class="shadow-2xl"
    >
      <el-carousel-item v-for="item in photos" :key="item.pictureUrl">
        <img class="object-cover w-full h-full shrink-0" :src="item.pictureUrl" :alt="item.caption">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang='ts' setup>
defineProps<{
  photos: IPhoto[]
}>()
</script>
