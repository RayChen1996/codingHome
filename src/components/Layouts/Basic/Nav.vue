<template>
  <div class="container flex justify-between">
    <router-link to="/">
      <img class="w-32 ml-[72px] mt-[24px]" src="/logo.svg" alt="logo" />
    </router-link>

    <div>
      <nav class="flex gap-12 mt-[31px] mb-[33px]">
        <router-link to="/">
          <a href="/">首頁</a>
        </router-link>
        <router-link to="/course">
          <a href="">課程介紹</a>
        </router-link>
        <router-link to="/login">
          <a href="" class="mr-[70px]">登入</a>
        </router-link>
      </nav>
    </div>
  </div>
  <div class="w-full h-5 flex">
    <div class="bg-[#62DB54] w-1/2 h-1"></div>
    <div class="h-1 bg-[#09ACF5] w-1/2"></div>
  </div>
</template>
