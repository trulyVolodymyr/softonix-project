<template>
  <Teleport to="body">
    <div
      class="w-full h-full absolute top-0 bg-modal z-10 flex justify-center items-center"
    >
      <div
        class="bg-black w-[650px] p-5"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>
