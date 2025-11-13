<script setup>
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>


<template>
  <div 
    class="
      fixed top-0 left-0 w-full
      flex flex-row items-center gap-4
      px-4 py-4 
      bg-[rgba(10,25,47,0.85)] backdrop-blur
      border border-[rgba(100,255,218,0.1)]
      z-50"
  >
    <div class="flex-shrink-0 bg-white rounded-full p-0.5">
      <img src="/img/logo.png" alt="logo" class="w-10 h-10">
    </div>
    
    <!-- 桌面端菜单 -->
    <div class="hidden md:flex gap-8 items-center">
      <Navigation :title="$t('homepage')" :to="'/'"></Navigation>
      <Navigation :title="$t('news')" :to="'/news'"></Navigation>
      <Navigation :title="$t('searchField')" :to="'/projects'"></Navigation>
      <Navigation :title="$t('members')" :to="'/members'"></Navigation>
      <Navigation :title="$t('publications')" :to="'/publications'"></Navigation>
      <Navigation :title="$t('joinUs')" :to="'/join'"></Navigation>
      <Navigation :title="'PYGAMD'" :to="'http://pygamd.com'" target="_blank"></Navigation>
    </div>
    <placeholder />
    <!-- 汉堡菜单按钮 -->
    <button
      @click="toggleMenu" 
      class="md:hidden ml-auto flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-800/30 transition-colors"
    >
      <div v-if="!isMenuOpen" class="h-6 w-6 pi pi-bars text-2xl">
      </div>
      <div v-else class="h-6 w-6 pi pi-times text-2xl">
      </div>
    </button>
    <LangChanger class="hidden md:flex" />
  </div>
  
  <!-- 移动端菜单 -->
  <div v-if="isMenuOpen" class="fixed top-[72px] left-0 w-full h-full bg-[rgba(10,25,47,0.95)] backdrop-blur-lg border-t border-blue-400/20 z-40 md:hidden">
    <div class="flex flex-col py-4">
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="$t('homepage')" :to="'/'"></Navigation>
      </div>
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="$t('news')" :to="'/news'"></Navigation>
      </div>
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="$t('searchField')" :to="'/projects'"></Navigation>
      </div>
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="$t('members')" :to="'/members'"></Navigation>
      </div>
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="$t('publications')" :to="'/publications'"></Navigation>
      </div>
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="$t('joinUs')" :to="'/join'"></Navigation>
      </div>
      <div @click="closeMenu" class="py-3 px-6 hover:bg-blue-800/30 transition-colors">
        <Navigation :title="'PYGAMD'" :to="'http://pygamd.com'" target="_blank"></Navigation>
      </div>
      <div class="flex justify-center py-3">
        <LangChanger />
      </div>
    </div>
  </div>
  
  <slot />
</template>

