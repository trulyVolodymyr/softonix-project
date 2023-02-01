<template>
  <div id="header" class="h-18 bg-black flex items-center justify-center  w-full">
    <div class="w-full max-w-[1440px] flex items-center justify-between laptop:p-6 pl-2 pr-5 py-3">
      <RouterLink :to="{ name: $routeNames.places }">
        <div class="flex space-x-2 items-center">
          <h3 class="font-medium tracking-wider text-xl text-white">FindHouse</h3>
          <IconHouse />
        </div>
      </RouterLink>

      <div class="ml-auto flex space-x-2">
        <HeaderDropdown />
      </div>
    </div>
  </div>
</template>
