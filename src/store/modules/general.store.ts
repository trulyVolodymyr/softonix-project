export const useGeneralStore = defineStore('generalStore', () => {
  const loading = ref<boolean>(false)

  return {
    loading
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
