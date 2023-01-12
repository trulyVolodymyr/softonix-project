<template>
  <h2>dashboard</h2>
</template>

<script lang="ts" setup>
onMounted(() => {
  useHttp.get('rest/v1/countries').then((res) => console.log(res))
})
</script>
