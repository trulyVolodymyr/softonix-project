<template>
  <div class="flex flex-col h-full overflow-hidden items-center">
    <Header />

    <div
      ref="top"
      class="w-full flex-grow overflow-y: scroll-gutter overlay overflow-auto flex justify-center scroll-smooth"
    >
      <div v-loading="loading" class="laptop:p-6 laptop:pr-4 p-0 max-w-[1440px] w-full">
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>
<script lang='ts' setup>
const generalStore = useGeneralStore()
const { loading, top } = storeToRefs(generalStore)

</script>
<style lang='scss'>
.scroll-gutter{
  scrollbar-gutter: stable;
}
</style>
