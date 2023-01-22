<template>
  <div class="flex flex-col h-full overflow-hidden items-center">
    <Header />

    <div class="w-full flex-grow overflow-auto flex justify-center">
      <div v-loading="loading" class="flex-grow  max-w-[1440px] w-full overflow-y-[overlay] scroll">
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>
<script lang='ts' setup>
const generalStore = useGeneralStore()
const { loading } = storeToRefs(generalStore)
</script>

<style lang='scss'>
.scroll{
  overflow-y: overlay;
}
</style>
