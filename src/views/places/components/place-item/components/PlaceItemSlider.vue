<template>
  <el-carousel
    height="450px"
    :autoplay="false"
    trigger="click"
    :interval="4000" arrow="always"
    class="desktop:w-[750px] shadow-2xl"
  >
    <el-carousel-item v-for="item in photos" :key="item.pictureUrl">
      <img class="object-cover w-full h-full shrink-0" :src="item.pictureUrl" :alt="item.caption">
    </el-carousel-item>
  </el-carousel>
</template>
<script lang='ts' setup>
defineProps<{
  photos: IPhoto[]
}>()

</script>
