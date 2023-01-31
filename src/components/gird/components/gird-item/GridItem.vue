<template>
  <div class=" hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-[600px]">
    <el-carousel
      height="250px"
      :autoplay="false"
      trigger="click"
    >
      <el-carousel-item v-for="item in photos" :key="item.thumbnailUrl">
        <img class="object-cover w-full  h-full shrink-0" :src="item.pictureUrl" :alt="item.caption">
      </el-carousel-item>
    </el-carousel>

    <div class="p-3 cursor-pointer " @click="openPlace">
      <p class="font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis mb-1">{{ address }}</p>

      <p class="text-xs">
        <span class="font-bold">{{ beds }}</span>{{ bedsText }}
        <span class="font-bold">{{ guests }}</span>{{ gestsText }}
      </p>

      <div class="flex justify-between">
        <p class="font-bold text-xs">$ {{ price.toLocaleString() }}<span class="font-normal"> night</span></p>

        <div v-if="stars" class="flex items-center space-x-1 ml-2">
          <p class="text-xs">&#9733; {{ stars }}</p>
        </div>
      </div>
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
  beds: number
  guests: number
}>()

const bedsText = computed(() => {
  let text = ''

  if (props.beds > 1) {
    text += ' beds /  '
  } else {
    text += ' bed /  '
  }

  return text
})
const gestsText = computed(() => {
  let text = ''
  if (props.guests > 1) {
    text += ' guests'
  } else {
    text += ' guest'
  }
  return text
})

function openPlace () {
  router.push({ path: `place/${props.id}` })
}

</script>
