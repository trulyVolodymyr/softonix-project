export const useGeneralStore = defineStore('generalStore', () => {
  const loading = ref<boolean>(false)
  const top = ref<Element>()

  return {
    loading,
    top
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
