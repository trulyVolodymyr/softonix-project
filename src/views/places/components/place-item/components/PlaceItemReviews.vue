<template>
  <div class="mt-4">
    <div
      v-for="item in reviews"
      :key="item.author.id"
      class="laptop:w-[550px] p-2 w-full mb-4 shadow-2xl  h-[max-content]"
    >
      <div class="flex w-full mb-2">
        <img
          class="w-10 h-10 mr-8"
          :src="item.author.pictureUrl"
          :alt="item.author.firstName"
        >

        <div>
          <p class="font-bold">{{ item.author.firstName }}</p>

          <p class="text-sm italic">{{ formatDate(item.createdAt) }}</p>
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
