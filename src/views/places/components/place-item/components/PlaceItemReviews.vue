<template>
  <div class="mt-4 flex flex-wrap justify-between">
    <div
      v-for="item in reviews"
      :key="item.author.id"
      class="max-w-[400px] p-2 mb-4 h-[max-content]"
    >
      <div class="flex w-full mb-2">
        <img
          class="w-10 h-10 mr-8"
          :src="item.author.pictureUrl"
          :alt="item.author.firstName"
        >

        <div>
          <p class="font-bold">{{ item.author.firstName }}</p>

          <p class="text-sm text-gray-500">{{ formatDate(item.createdAt) }}</p>
        </div>
      </div>

      <p class="text-xs">{{ item.comments }}</p>
    </div>
  </div>
</template>
<script lang='ts' setup>
defineProps<{
  reviews: IReview[]
}>()

function formatDate (date: string) {
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'long' })
  const year = d.getFullYear()

  return [month, year].join(' ')
}
</script>
