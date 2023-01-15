
export const homeStore = defineStore('homeStore', () => {
  const filtersModalVisability = ref<boolean>(false)

  return {
    filtersModalVisability
  }
})
