<template>
  <div class="flex flex-col h-full overflow-hidden items-center">
    <Header />

    <div class="w-full flex-grow overflow-auto flex justify-center">
      <div class="flex-grow  max-w-[1440px] w-full">
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>
