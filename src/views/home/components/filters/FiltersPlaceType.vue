<template>
  <h3
    class="text-white text-lg text-center"
  >
    Type of place
  </h3>
  <div
    class="flex"
  >
    <el-checkbox v-model="typeEntire" label="Entire place" size="large" />
    <el-checkbox v-model="typePrivate" label="Private room" size="large" />
  </div>
</template>

<script lang='ts' setup>

const filtersStore = useFiltersStore()
const { typeEntire, typePrivate } = storeToRefs(filtersStore)

</script>
