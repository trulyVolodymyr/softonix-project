<template>
  <div class="header-button-hover">
    <IconMenu />
    <IconAvatar />
  </div>
</template>

<style lang="scss">
.header-button-hover{
  &:hover svg{
    fill: #000;
  }
  @apply flex items-center border border-white p-2 space-x-3
    cursor-pointer transition duration-300 hover:bg-white
}
</style>
