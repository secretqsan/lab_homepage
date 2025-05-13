<script setup>
const { setLocale } = useI18n()
const locale = ref('zh')
const toggleLocale = () => {
  locale.value = locale.value == 'zh' ? 'en' : 'zh'
  setLocale(locale.value)
}
</script>

<template>
  <header 
    class="
      fixed top-0 left-0 w-full
      flex flex-row items-center gap-4
      px-4 py-4 
      bg-[rgba(10,25,47,0.85)] backdrop-blur
      border border-[rgba(100,255,218,0.1)]
      z-50">
    <div class="flex-shrink-0">
      <h1 class="text-4xl font-bold text-[#64ffda] m-0 [text-shadow:0_0_10px_rgba(100,255,218,0.5)]">
        LAB
      </h1>
    </div>
    <div class="flex gap-8 items-center">
      <a href="#home" class="text-[#ccd6f6] no-underline text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group">
        <span class="relative"> {{$t('homepage')}}</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>
      <a href="#research" class="text-[#ccd6f6] no-underline text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group">
        <span class="relative">{{ $t("searchField") }}</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>
      <a href="#team" class="text-[#ccd6f6] no-underline text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group">
        <span class="relative">{{ $t("members") }}</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>
      <a href="#publications" class="text-[#ccd6f6] no-underline text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group">
        <span class="relative">{{ $t("publications") }}</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>
      <a href="#contact" class="text-[#ccd6f6] no-underline text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group">
        <span class="relative">{{ $t("joinUs") }}</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </a>
      
    </div>
    <Placeholder />
      <button @click="toggleLocale" class="text-[#ccd6f6] text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group border border-[#64ffda] hover:bg-[rgba(100,255,218,0.1)]">
        {{ locale === 'zh' ? 'EN' : '中' }}
      </button>
  </header>
  <slot />
</template>

