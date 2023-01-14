<template>
  <Modal>
    <h3 class="text-white text-2xl text-center mb-5">Sorry!</h3>
    <p class="text-white text-center mb-10">Your authentication has failed. Please try again later.</p>

    <ElButton
      class="app-button-white"
      @click="toggleError"
    >
      OK
    </ElButton>
  </Modal>
</template>

<script lang="ts" setup>
const authStore = useAuthStore()
const { error } = storeToRefs(authStore)

function toggleError () {
  error.value = false
}
</script>
