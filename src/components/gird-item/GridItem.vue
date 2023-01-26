<template>
  <div class=" hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-[600px]">
    <el-carousel
      height="250px"
      :autoplay="false"
      trigger="click"
    >
      <el-carousel-item v-for="item in photos" :key="item.pictureUrl">
        <img class="object-cover w-full  h-full shrink-0" :src="item.pictureUrl" :alt="item.caption">
      </el-carousel-item>
    </el-carousel>

    <div class="p-3 cursor-pointer " @click="openPlace">
      <div class="flex justify-between mt-1">
        <p class="font-bold text-xs whitespace-nowrap overflow-hidden text-ellipsis">{{ address }}</p>
        <div v-if="stars" class="flex items-center space-x-1 ml-2">
          <IconStar /><p class="text-xs">{{ stars }}</p>
        </div>
      </div>

      <p class="mt-1 font-medium text-xs">$ {{ price }}<span class="font-normal"> night</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

const props = defineProps<{
  photos: IGridItemPhoto[]
  address: string
  stars: number
  price: number
  id: number
}>()

function openPlace () {
  router.push({ path: `place/${props.id}` })
}

</script>
